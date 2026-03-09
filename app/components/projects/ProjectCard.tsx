import Image from "next/image";

type ProjectCardProps = {
  name: string;
  screenshot: string;
  description: string;
  technologies: string[];
  siteUrl: string;
  review: string;
  reviewer: string;
};

export default function ProjectCard({
  name,
  screenshot,
  description,
  technologies,
  siteUrl,
  review,
  reviewer,
}: ProjectCardProps) {
  return (
    <div
      className="group relative w-80 h-126 cursor-pointer"
      style={{ perspective: "1200px" }}
    >
      {/* Flip container */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:transform-[rotateY(180deg)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Screenshot */}
          <div className="relative w-full h-52 bg-gray-100 shrink-0 overflow-hidden">
            <Image
              src={screenshot}
              alt={`${name} website built by RM Web Solutions`}
              fill
              className="object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-white to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 p-5 flex-1">
            <h3 className="font-sora font-bold text-gray-900 text-lg leading-tight">
              {name}
            </h3>
            <p className="font-jakarta text-gray-500 text-sm leading-relaxed">
              {description}
            </p>

            {/* Technologies Section */}
            <div className="mt-auto flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-sora px-2.5 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full border border-orange-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="font-jakarta text-xs text-gray-400 mt-1">
              Hover to see review →
            </p>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 shadow-md flex flex-col items-center justify-center p-8 text-white"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Quote icon */}
          <svg
            className="w-10 h-10 text-orange-300 mb-4 opacity-80"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <p className="font-jakarta text-center text-white/90 text-sm leading-relaxed italic mb-6">
            &quot;{review}&quot;
          </p>

          <div className="mt-auto text-center">
            <p className="font-jakarta text-orange-200 text-xs font-medium">
              {reviewer}
            </p>
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jakarta mt-3 inline-block px-4 py-2 bg-white text-orange-600 text-xs font-semibold rounded-full hover:bg-orange-50 transition-colors"
            >
              Visit Site ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
