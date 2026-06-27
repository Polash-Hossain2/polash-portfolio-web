import Link from "next/link";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#081633]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white">
                P
              </div>

              <div>
                <h3 className="font-mono text-3xl font-extrabold tracking-wide text-white">
                  
                  Polash Hossain
                  
                </h3>

                <p className="text-lg text-slate-300">
                  FULL Stack Developer
                </p>
              </div>
            </div>

            <p className="mt-6 text-base text-slate-400">
              © 2026 All rights reserved. Built with passion and code.
            </p>
          </div>

          {/* Right Side */}
          <nav>
            <ul className="flex flex-wrap items-center gap-8 text-lg">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition hover:text-blue-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </footer>
  );
}