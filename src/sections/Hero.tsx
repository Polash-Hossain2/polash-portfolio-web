"use client";

import { Download, Send, Code2, Rocket, Zap } from "lucide-react";

import TypingText from "@/components/TypingText";
import Bounce from "@/sections/Bounce";
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#08142d]">
      <div className="mx-auto max-w-7xl px-3 py-4 lg:py-12 ml-4 ">
        {/* px-6 py-20 lg:py-28 */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT */}
          <div>
           <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-7 py-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-base font-extrabold text-neutral-400">
              Available for Opportunities
            </span>
          </div>

            <h1 className="mb-6 text-5xl font-extrabold text-white md:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Polash
              </span>
            </h1>

            <div className="mb-8 h-14">
              <TypingText />
            </div>

            <p className="max-w-xl text-lg leading-9 text-slate-300">
              I build scalable web applications with clean code and modern
              technologies. With 2+ years of hands-on experience in React,
              Node.js, and MongoDB, I create digital solutions that deliver
              real business value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold text-white">
                <Download size={18} />
                Resume
              </button>

              <button className="flex items-center gap-2 rounded-xl border-2 border-blue-500 px-7 py-4 font-semibold text-white">
                <Send size={18} />
                Hire Me
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-5xl font-bold text-blue-400">20+</h3>
                <p className="mt-2 text-slate-400">Projects Done</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-purple-400">2+</h3>
                <p className="mt-2 text-slate-400">Years Experience</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-green-400">100%</h3>
                <p className="mt-2 text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            
            {/* Floating Top Circle */}
            {/* <div className="animate-bounce-slow absolute -left-4 top-[-10px] z-15 flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-cyan-500">
              <Zap className="text-white" />
            </div> */}
            <Bounce />

            <div className="rounded-[30px] border border-slate-700 bg-slate-900/70 p-8 backdrop-blur">
              
              <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 p-14">
                <div className="flex flex-col items-center justify-center text-center">
                  <Code2
                    size={80}
                    className="mb-6 text-white"
                  />

                  <h3 className="text-4xl font-bold text-white">
                    Code • Build • Deploy
                  </h3>
                </div>
              </div>

              <div className="mt-5">
                <h4 className="mb-5 text-xl font-bold text-white">
                  ⚙ Tech Stack
                </h4>

                <div className="flex flex-wrap gap-3">
                 
                  <Badge className="text-base px-3 py-4 bg-blue-500/20  text-blue-300 " variant="secondary"> React.js</Badge>

                  <Badge className="text-base px-3 py-4 bg-green-500/20  text-green-300 " variant="secondary"> Node.js</Badge>

                  <Badge className="text-base px-3 py-4 bg-yellow-500/20  text-yellow-300 " variant="secondary"> MongoDB</Badge>

                  <Badge className="text-base px-3 py-4 bg-purple-500/20  text-purple-300 " variant="secondary"> Express</Badge>

                  <Badge className="text-base px-3 py-4 bg-cyan-500/20 text-cyan-300 " variant="secondary"> Express</Badge>
                </div>
              </div>
            </div>

            {/* Floating Bottom Circle */}
            <div className="animate-float absolute -bottom-4 right-0 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
              <Rocket className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}