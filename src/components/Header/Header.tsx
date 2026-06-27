"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
  const sections = navItems
    .map((item) => document.querySelector(item.href))
    .filter((section): section is Element => section !== null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(
            entry.target.id.charAt(0).toUpperCase() +
              entry.target.id.slice(1)
          );
        }
      });
    },
    {
      root: null,
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center px-5 py-4.5">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-white">
            P
          </div>

          <div>
            <h2 className="font-bold text-white">
              Polash Hossain
            </h2>

            <p className="text-xs text-slate-400">
              Full Stack Developer
            </p>
          </div>

        </div>

        {/* Desktop */}
        <nav className="ml-auto hidden lg:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={`border-b-2 pb-1 text-sm font-semibold transition-all ${
                    active === item.name
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile */}
        <div className="ml-auto lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu className="text-white" size={28} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-slate-900 border-slate-700"
            >
              <nav className="mt-10">
                <ul className="space-y-6">

                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setActive(item.name)}
                        className={`text-lg font-medium ${
                          active === item.name
                            ? "text-blue-500"
                            : "text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}

                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}