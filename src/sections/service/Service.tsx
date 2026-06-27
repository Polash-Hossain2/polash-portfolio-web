"use client";

import {
  Code2,
  Smartphone,
  Database,
  Check,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies, focusing on performance and user experience.",
    icon: Code2,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    features: [
      "Full-stack MERN applications",
      "Responsive design",
      "API integration",
    ],
  },
  {
    title: "UI/UX Development",
    description:
      "Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.",
    icon: Smartphone,
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    features: [
      "Modern React components",
      "Tailwind CSS styling",
      "Cross-browser compatible",
    ],
  },
  {
    title: "Backend Solutions",
    description:
      "Robust server-side solutions with secure authentication, database design, and API development.",
    icon: Database,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    features: [
      "Node.js & Express APIs",
      "Database design & optimization",
      "Authentication systems",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#08142d] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 ">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-white md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            What I can help you build for your business
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  rounded-3xl
                  border
                  border-slate-700
                  bg-slate-900/70
                  p-8
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/30
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
                "
              >
                {/* Icon */}
                <div
                  className={`mb-8 inline-flex rounded-2xl p-5 ${service.iconBg}`}
                >
                  <Icon
                    className={`h-8 w-8 ${service.iconColor}`}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-3xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-8 leading-8 text-slate-400">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <Check className="h-5 w-5 text-green-400" />

                      <span className="font-medium text-slate-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}