"use client";
import { sendEmail, State } from "../lib/mail";
import { useActionState } from "react";

export default function Page() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isLoading] = useActionState(
    sendEmail,
    initialState,
  );

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32"
    >
      <h3 className="text-orange-500 text-2xl font-bold mb-2 text-center">
        Contact Us
      </h3>
      <p className="text-gray-500 text-center mb-8">
        Let’s talk about your project. Fill out the form below and we’ll get
        back to you.
      </p>

      <form
        action={formAction}
        className="bg-white rounded-xl shadow-lg p-8 space-y-8"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            defaultValue={state.values?.fullName ?? ""}
            placeholder="Your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {state?.errors?.fullName &&
            state.errors.fullName.map((error: string) => (
              <p
                className="mt-1 text-sm text-orange-500 font-medium"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            defaultValue={state.values?.email ?? ""}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {state?.errors?.email &&
            state.errors.email.map((error: string) => (
              <p
                className="mt-1 text-sm text-orange-500 font-medium"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            defaultValue={state.values?.phoneNumber ?? ""}
            placeholder="(555) 123-4567"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {state?.errors?.phoneNumber &&
            state.errors.phoneNumber.map((error: string) => (
              <p
                className="mt-1 text-sm text-orange-500 font-medium"
                key={error}
              >
                {error}
              </p>
            ))}
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
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>

        {state.status === "success" && (
          <div className="mt-3 text-sm text-orange-500 font-medium">
            {state.message}
          </div>
        )}

        {state.message && state.status === "error" && (
          <div
            className="mt-3 text-sm text-orange-500 font-medium"
            role="alert"
          >
            {state.message}
          </div>
        )}
      </form>
    </section>
  );
}
