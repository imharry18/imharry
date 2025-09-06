// ContactMeOutroLeft.jsx
import PlatformHandleLinksDock from "./PlatformHandleLinksDock.jsx";
export default function ContactMeOutroLeft() {
  return (
    // CHANGED: text-md-left instead of lg
    <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        Contact Me
      </h1>
      {/* CHANGED: mx-auto for centering on mobile, md:mx-0 for left-align on tablet+ */}
      <p className="mt-4 max-w-md mx-auto md:mx-0 text-base text-gray-200 md:text-lg">
        Interested in collaborating or just want to connect? Drop me a message!
      </p>
      <p className="mt-2 max-w-md mx-auto md:mx-0 text-base text-gray-200">
        I am open for freelance projects, technical writing gigs, and expert consulting.
      </p>
       {/* CHANGED: justify-center md:justify-start for alignment */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
        <PlatformHandleLinksDock />
      </div>
    </div>
  );
}