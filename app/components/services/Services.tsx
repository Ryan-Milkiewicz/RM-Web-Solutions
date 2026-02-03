export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 items-center">
      <div className="space-y-2 text-center md:text-left mb-6">
        <h3 className="text-orange-500 text-2xl font-bold p-2">Our Services</h3>
        <p className="text-gray-500 font-medium">
          We provide a range of services to help your business grow and succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition h-64">
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            Web Development
          </h4>
          <p className="text-gray-500 mb-4">
            Design and build modern, responsive websites that capture your
            brand, engage visitors, and are optimized for SEO to attract more
            traffic and convert visitors into customers.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition h-64">
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            Custom App Development
          </h4>
          <p className="text-gray-500 mb-4">
            Create tailored web applications and software solutions that
            streamline your operations and solve your unique business
            challenges.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition h-64">
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            Mobile Development
          </h4>
          <p className="text-gray-500 mb-4">
            Develop high-performance iOS and Android apps designed for
            usability, speed, and seamless user experiences.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition h-64">
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            Maintenance & Support
          </h4>
          <p className="text-gray-500 mb-4">
            Ensure your websites and apps stay secure, updated, and optimized
            with ongoing maintenance, bug fixes, and performance improvements.
          </p>
        </div>
      </div>
    </section>
  );
}
