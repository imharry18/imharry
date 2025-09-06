// ContactMeOutroLeft.jsx
import PlatformHandleLinksDock from "./PlatformHandleLinksDock.jsx";
export default function ContactMeOutroLeft() {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Contact Me
      </h1>
      <p className="mt-4 max-w-md mx-auto md:mx-0 text-base text-gray-200 md:text-lg">
        If you are interested in collaborating or just want to connect, drop me a message!
      </p>
      <p className="mt-2 max-w-md mx-auto md:mx-0 text-base text-gray-200">
        You can also reach me via Email, Whatsapp, Instagram, Twitter, GitHub, Telegram, or LinkedIn. I look forward to hearing from you!
      </p>
       {/* CHANGED: justify-center md:justify-start for alignment */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
        <PlatformHandleLinksDock />
      </div>
    </div>
  );
}