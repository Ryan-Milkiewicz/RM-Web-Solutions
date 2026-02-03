export default function ButtonWithSwoosh() {
  return (
    <div className="relative max-w-[600px] w-full">
      <button className="mt-4 bg-orange-500 rounded-lg text-white font-bold px-6 py-3">
        Contact Us
      </button>

      <div className="absolute left-0 right-0 -bottom-12 h-16 overflow-visible pointer-events-none">
        <svg
          viewBox="0 0 400 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Bottom lightest wave */}
          <path
            d="M0 45 Q90 70 180 45 T400 45 V80 H0 V45 Z"
            fill="#fbbf24" /* orange-400 */
            fillOpacity="0.15"
          />
          {/* Second wave */}
          <path
            d="M0 40 Q100 65 200 40 T400 40 V80 H0 V40 Z"
            fill="#f97316" /* orange-500 */
            fillOpacity="0.2"
          />
          {/* Middle wave */}
          <path
            d="M0 35 Q110 55 220 35 T400 35 V80 H0 V35 Z"
            fill="#ea580c" /* orange-600 */
            fillOpacity="0.4"
          />
          {/* Fourth wave */}
          <path
            d="M0 30 Q120 45 240 30 T400 30 V80 H0 V30 Z"
            fill="#fbbf24" /* orange-400 */
            fillOpacity="0.15"
          />
          {/* Top wave */}
          <path
            d="M0 25 Q130 35 260 25 T400 25 V80 H0 V25 Z"
            fill="#f97316" /* orange-500 */
            fillOpacity="0.2"
          />
        </svg>
      </div>
    </div>
  );
}
