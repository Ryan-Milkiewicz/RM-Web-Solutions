export default function Page() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <h3 className="text-orange-500 text-2xl font-bold mb-2 text-center">
        Contact Us
      </h3>
      <p className="text-gray-500 text-center mb-8">
        Let’s talk about your project. Fill out the form below and we’ll get
        back to you.
      </p>

      <form className="bg-white rounded-xl shadow-md p-6 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            defaultValue=""
            placeholder="Your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            defaultValue=""
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            defaultValue=""
            placeholder="(555) 123-4567"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            rows={8}
            name="message"
            defaultValue=""
            placeholder="Tell us about your project..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
