import { ExternalLink } from "lucide-react";
import { DotBg } from "@/components/dotBg";

const projects = [
  {
    title: "Clinic System",
    description:
      "Book appointments, review medical records, manage schedules, and handle billing — all in one simple interface for patients, doctors, and admins.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://clinic-system-ten-nu.vercel.app/",
    githubUrl: "https://github.com/jerome200024/clinic-system",
    image: "/clinic-preview.png",
    status: "Live",
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden cursor-default"
    >
      <DotBg />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Projects
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-12 animate-fade-in animation-delay-100">
          Things I've{" "}
          <span className="font-serif italic font-normal text-white">
            built
          </span>
        </h2>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-2 gap-4 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Image */}
              <div className="relative min-h-64 lg:min-h-72 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                {/* Status */}
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-green-400 border border-green-400/20 bg-green-400/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-md border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  {/* Live Demo */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-gray-300 text-sm font-medium hover:text-white hover:border-cyan-400/40 transition-all"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Projects */}
        <div className="mt-8 text-center py-7 border border-dashed border-white/10 rounded-2xl text-gray-400 text-sm animate-fade-in animation-delay-300">
          More projects coming soon —{" "}
          <span className="text-cyan-400 font-medium">stay tuned.</span>
        </div>
      </div>
    </section>
  );
};
