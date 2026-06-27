"use client";

import { useEffect, useState } from "react";

const texts = [
  "Full-Stack Developer & Problem Solver",
  "Building Scalable Web Applications",
  "React & Laravel Specialist",
  "Creating Digital Solutions",
  "Building Modern Web Apps",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];

    let speed = isDeleting ? 50 : 90;

    // pause when fully typed
    if (!isDeleting && text === current) {
      speed = 1800;
      setTimeout(() => setIsDeleting(true), 1800);
      return;
    }

    // move to next text when fully deleted
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <h2 className="font-mono text-2xl font-bold text-white">
      {text}
      <span className="animate-pulse text-blue-500">|</span>
    </h2>
  );
}