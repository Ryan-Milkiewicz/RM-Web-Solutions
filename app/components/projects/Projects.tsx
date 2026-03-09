import ProjectCard from "./ProjectCard";

export default function Projects() {
  const reviews = [
    {
      name: "Clemens Electric",
      screenshot: "/clemens-electric-screenshot.png",
      description:
        "Business website for an electrical & solar contractor — built for local SEO and lead generation.",
      technologies: [
        { name: "Next.js", logo: "/icons/nextjs-logo.svg" },
        { name: "Tailwind CSS", logo: "/icons/tailwindcss-logo.svg" },
        { name: "Vercel", logo: "/icons/vercel-logo.svg" },
        { name: "Sanity CMS", logo: "/icons/sanity-logo.svg" },
      ],
      siteUrl: "https://clemenselectric.com",
      review:
        "RM Web Solutions built our firm Clemens Electric website and the experience was excellent from start to finish. They took the time to understand our services (electrical, solar, EV chargers, generators, and energy storage), asked the right questions, and turned it into a clean, professional site that actually converts visitors into calls and form submissions. Communication was fast, timelines were clear, and revisions were handled quickly without any runaround. The final site looks great on mobile, loads fast, and the structure is set up in a way that makes sense for local search. Highly recommend RM Web Solutions.",
      reviewer: "— Stephen Clemens, Owner",
    },
  ];
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
    >
      <div className="space-y-4 mb-4">
        <h2 className="font-sora text-orange-500 text-2xl font-bold">
          Projects
        </h2>
        <h3 className="font-jakarta text-gray-800 text-xl font-semibold">
          Recent compleated projects we&apos;ve worked on
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {reviews.map((review) => (
          <ProjectCard key={review.name} {...review} />
        ))}
      </div>
    </section>
  );
}
