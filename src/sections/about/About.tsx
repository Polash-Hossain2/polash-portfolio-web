"use client";

import {
  UserRound,
  GraduationCap,
  Briefcase,
  MapPin,
  Languages,
  History,
} from "lucide-react";

const timeline = [
  {
    year: "2026 - Present",
    title: "Full Stack Developer",
    desc: "Freelance projects & personal development",
  },
  {
    year: "2024 - 2025",
    title: "Learning & Growth",
    desc: "Mastered MERN stack, built multiple projects",
  },
  {
    year: "2023 - 2024",
    title: "Web Development Start",
    desc: "Started learning HTML, CSS, JavaScript",
  },
  {
    year: "2022 - 2023",
    title: "Computer Science",
    desc: "University studies & programming fundamentals",
  },
];

export default function About() {
  return (
    <section
     id="about"
      className="bg-[#08142d] py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-white md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            Passionate developer with a focus on creating efficient,
            scalable web solutions
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* LEFT CARD */}
          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur transition-all duration-300 hover:border-blue-500/30">
            <div className="mb-8 flex items-center gap-3">
              <UserRound className="h-8 w-8 text-blue-400" />
              <h3 className="text-3xl font-bold text-white">
                My Journey
              </h3>
            </div>

            <div className="space-y-6 text-lg leading-9 text-slate-300">
              <p>
                I'm a passionate MERN Stack Developer with over
                2 years of experience building modern web
                applications. My journey began with curiosity
                about how websites work, which evolved into a
                deep love for solving complex problems with code.
              </p>

              <p>
                I specialize in creating full-stack applications
                using React, Node.js, Express, and MongoDB.
                I believe in writing clean, maintainable code
                and following best practices to ensure
                scalability and performance.
              </p>
            </div>

            {/* Info Grid */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/20 p-4">
                  <GraduationCap className="text-blue-400" />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Education
                  </h4>

                  <p className="text-slate-400">
                    Bachelors in Computer Science
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-green-500/20 p-4">
                  <Briefcase className="text-green-400" />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Experience
                  </h4>

                  <p className="text-slate-400">
                    2 Years MERN Stack
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-purple-500/20 p-4">
                  <MapPin className="text-purple-400" />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Location
                  </h4>

                  <p className="text-slate-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-yellow-500/20 p-4">
                  <Languages className="text-yellow-400" />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Languages
                  </h4>

                  <p className="text-slate-400">
                    Bangla, English
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur transition-all duration-300 hover:border-purple-500/30">
            <div className="mb-10 flex items-center gap-3">
              <History className="h-8 w-8 text-purple-400" />
              <h3 className="text-3xl font-bold text-white">
                Timeline
              </h3>
            </div>

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500" />

                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[5px] top-5 h-[90px] w-[2px] bg-blue-500/30" />
                  )}

                  <p className="font-bold text-blue-400">
                    {item.year}
                  </p>

                  <h4 className="mt-2 text-xl font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}