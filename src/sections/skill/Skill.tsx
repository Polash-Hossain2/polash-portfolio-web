"use client";

import {
  Atom,
  Database,
  Server,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Modern UI Development",
    icon: Atom,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    skills: [
      { name: "React.js", value: 90 },
      { name: "Next.js", value: 85 },
      { name: "JavaScript", value: 88 },
      { name: "Tailwind CSS", value: 92 },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server & Database",
    icon: Server,
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    skills: [
      { name: "Node.js", value: 87 },
      { name: "Express.js", value: 85 },
      { name: "REST APIs", value: 90 },
      { name: "Authentication", value: 83 },
    ],
  },
  {
    title: "Database & Tools",
    subtitle: "Data & Development Tools",
    icon: Database,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    skills: [
      { name: "MongoDB", value: 86 },
      { name: "MySQL", value: 80 },
      { name: "Git & GitHub", value: 92 },
      { name: "VS Code", value: 95 },
    ],
  },
];

const additionalSkills = [
  "Redux",
  "TypeScript",
  "JWT Auth",
  "WebSockets",
  "AWS Basics",
  "Problem Solving",
];

export default function Skills() {
  return (
    <section
    
      id="skills"
      className="bg-[#08142d] py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-white md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            Technologies and tools I work with to build amazing products
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
              >
                {/* Header */}
                <div className="mb-10 flex items-center gap-4">
                  <div
                    className={`rounded-2xl p-4 ${group.iconBg}`}
                  >
                    <Icon
                      className={`h-8 w-8 ${group.iconColor}`}
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {group.title}
                    </h3>

                    <p className="text-slate-400">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-8">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-semibold text-white">
                          {skill.name}
                        </span>

                        <span className="font-bold text-blue-400">
                          {skill.value}%
                        </span>
                      </div>

                      {/* Progress */}
                      <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700"
                          style={{
                            width: `${skill.value}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-20 text-center">
          <h3 className="mb-8 text-3xl font-bold text-white">
            Additional Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-lg font-medium text-slate-200 transition hover:border-blue-500/40 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}