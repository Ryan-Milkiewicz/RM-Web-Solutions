import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 items-center"
    >
      <div className="space-y-4 mb-4">
        <h2 className="font-sora text-orange-500 text-2xl font-bold">
          Projects
        </h2>
        <h3 className="font-jakarta text-gray-800 text-xl font-semibold">
          A Few Projects we&apos;ve worked on
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
