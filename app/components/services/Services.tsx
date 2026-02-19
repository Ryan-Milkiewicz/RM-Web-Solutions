import { Globe, Code2, Smartphone, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Design and build modern, responsive websites that capture your brand, engage visitors, and are optimized for SEO to attract more traffic and convert visitors into customers.",
    },
    {
      icon: Code2,
      title: "Custom Application Development",
      description:
        "Create tailored web applications and software solutions that streamline your operations and solve your unique business challenges.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Develop high-performance iOS and Android apps designed for usability, speed, and seamless user experiences.",
    },
    {
      icon: Wrench,
      title: "Maintenance, Hosting & Support",
      description:
        "Ensure your websites and apps stay secure with reliable hosting, ongoing maintenance, bug fixes, and performance improvements.",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 items-center"
    >
      <div className="space-y-2 text-center md:text-left mb-6">
        <h2 className="text-orange-500 text-2xl font-bold">Our Services</h2>
        <p className="text-gray-500 font-medium">
          We provide a range of services to help your business grow and succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition h-64"
          >
            <div className="mb-3">
              <service.icon className="text-orange-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
