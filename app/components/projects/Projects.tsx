import ProjectCard from "./ProjectCard";

export default function Projects() {
  const reviews = [
    {
      name: "Clemens Electric",
      description: "Powering Your Solar & Electric Solutions",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      siteUrl: "https://clemenselectric.com",
      review:
        "RM Web Solutions built our firm Clemens Electric website and the experience was excellent from start to finish. They took the time to understand our services (electrical, solar, EV chargers, generators, and energy storage), asked the right questions, and turned it into a clean, professional site that actually converts visitors into calls and form submissions. Communication was fast, timelines were clear, and revisions were handled quickly without any runaround. The final site looks great on mobile, loads fast, and the structure is set up in a way that makes sense for local search. Highly recommend RM Web Solutions.",
      reviewer: "— Stephen Clemens, Owner",
    },
  ];
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
          {reviews.map((reivew) => (
            <ProjectCard key={reivew.name} {...reivew} />
          ))}
        </div>
      </div>
    </section>
  );
}
