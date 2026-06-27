import Hero from "@/sections/Hero";
import About from "@/sections/about/About";
import Skills from "@/sections/skill/Skill";
import ProjectsSection from "@/sections/featured/Projects-Section";
import Services from "@/sections/service/Service";
import Contract from "@/sections/contract/Contract";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Services />
      <Contract />
      
    </>
  );
}