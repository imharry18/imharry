import PlatformHandleLinksDock from "./PlatformHandleLinksDock.jsx";

export default function ContactMeCard() {
  return (
    <section
      className="flex items-center justify-center w-full h-full bg-[#111111] px-4 py-10 sm:py-12 md:py-16"
      aria-label="Follow & Social Links"
    >
      <div
        className="
          relative z-10
          w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
          bg-gradient-to-br from-[#132949] via-[#232949] to-[#2b778c]
          px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12
          rounded-2xl shadow-xl
          flex flex-col items-center justify-center gap-6
          mx-auto
          backdrop-blur-lg
        "
        style={{
          boxShadow: "14px 14px 30px rgba(0,0,0,0.50)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      >
        {/* Heading */}
        <h2
          className="
            text-2xl sm:text-2xl md:text-2xl lg:text-4xl
            font-bold text-white leading-tight
            text-center
            drop-shadow-[0_2px_12px_rgba(214,43,255,0.11)]
          "
        >
          Connect with Me
        </h2>
        {/* Social Links */}
        <div className="w-full flex justify-center">
          <PlatformHandleLinksDock />
        </div>

        {/* Subtitle */}

      </div>
    </section>
  );
}
