// ContactMeOutroLeft.jsx
export default function ContactMeOutroLeft() {
  return (
    <section className="flex flex-col justify-center items-start text-left px-10 py-16 max-w-xl mx-auto my-10">
      <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(64,79,221,0.13)]">
        Contact Me
      </h1>
      <p className="text-lg lg:text-xl text-gray-100 font-medium mb-3 max-w-md">
        Interested in collaborating or just want to connect? Feel free to reach out!
        <span className="block text-blue-400 underline mt-2 font-semibold">Click Me</span>
      </p>
      <p className="text-base text-gray-400 mt-3 max-w-md">
        Looking forward to connecting, sharing ideas, and working together!
      </p>
    </section>
  );
}
