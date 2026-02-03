export default function Header() {
  return (
    <section className="grid grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-2">
        <h3 className="text-orange-500 text-2xl font-bold p-2">
          Professional Web Solutions
        </h3>
        <h3 className="text-gray-800 text-2xl font-bold p-2">
          To Boost your Business
        </h3>
        <p className="font-medium text-gray-500">
          We design and develop modern websites and custom software solutions
          that help your business stand out, streamline operations, and turn
          ideas into real results.
        </p>
        <button className="mt-6 bg-orange-500 rounded-lg text-white font-bold px-6 py-3">
          Contact Us
        </button>
      </div>
      <div>
        <h1>Image will go here</h1>
      </div>
    </section>
  );
}
