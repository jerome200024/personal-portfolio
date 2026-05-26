import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { DotBg } from "@/components/dotBg";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiTailwindcss,
  SiVercel,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Flutter", icon: SiFlutter },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vercel", icon: SiVercel },
  { name: "Github", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <DotBg />
      {/*BG*/}
      <div className=" absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-background/80 to-background" />
      </div>
      {/*Dots*/}

      {/*Content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center cursor-default">
          {/*Text-content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-foreground">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer • React Developer • AI Automation
              </span>
            </div>

            {/*Heading*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                Building<span className="text-primary glow-text"> Skills</span>
                <br />
                to Create Impactful
                <br />
                <span className="font-serif italic font-normal text-white">
                  Applications
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                Passionate about crafting seamless user experiences and writing
                clean, efficient code. Let's build something amazing together!
              </p>
            </div>

            {/*Buttons CT*/}

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <a href="#contact" className="">
                <Button size="lg">
                  Let's Talk <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton />
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-default text-primary font-bold">
                Social Media:{" "}
              </span>
              <SocialIcon
                url="https://github.com"
                href="https://github.com/jerome200024?tab=repositories"
                style={{ width: 30, height: 30 }}
              />
              <SocialIcon
                url="https://linkedin.com"
                href="https://www.linkedin.com/in/jerome-lora-4138b83a6/"
                style={{ width: 30, height: 30 }}
              />
            </div>
          </div>

          {/*Image-content*/}

          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Placeholder */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
               bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/jerome.png"
                  alt="Profile"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600 cursor-default">
          <p className="text-sm text-muted-foreground/120 mb-6 font-bold text-center">
            Skills And Tools
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-3">
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-6 py-3 flex items-center gap-2"
                >
                  <skill.icon className="w-5 h-5 text-primary opacity-70" />
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
