import TechCard from "./TechCard";

export default function Technologies() {
  const techs = [
    { name: "REACT", logo: "/icons/react-logo.svg", alt: "React logo" },
    { name: "NEXT.JS", logo: "/icons/nextjs-logo.svg", alt: "Next.JS Logo" },
    { name: "ANGULAR", logo: "/icons/angular-logo.svg", alt: "Angular Logo" },
    {
      name: "WORDPRESS",
      logo: "/icons/wordpress-logo.svg",
      alt: "Wordpress Logo",
    },
    { name: "NODE.JS", logo: "/icons/nodejs-logo.svg", alt: "Node.JS Logo" },
    {
      name: ".NET CORE",
      logo: "/icons/dotnetcore-logo.svg",
      alt: ".NET Core Logo",
    },
    { name: "PHP", logo: "/icons/php-logo.svg", alt: "PHP Logo" },
    { name: "DOCKER", logo: "/icons/docker-logo.svg", alt: "Docker Logo" },
  ];
  return (
    <section
      id="technologies"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 items-center"
    >
      <div className="space-y-4 mb-4">
        <h2 className="font-sora text-orange-500 text-2xl font-bold">
          Technologies
        </h2>
        <h3 className="font-jakarta text-gray-800 text-xl font-semibold">
          Some of the cool tech we love to build with
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {techs.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
