// AboutMeIntroLeft.jsx
export default function AboutMeIntroLeft() {
  return (
    // CHANGED: text-md-left instead of lg
    <div className="text-center md:text-left">
      {/* CHANGED: md:text-6xl and lg:text-7xl for smoother scaling */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white pt-10 mb-3">
        About Me
      </h1>
      {/* CHANGED: mx-auto for centering on mobile, md:mx-0 for left-align on tablet+ */}
      <p className="mt-4 max-w-md mx-auto md:mx-0 text-base text-gray-200 md:text-lg">
        Hi, I'm <strong>Harish Kumar</strong>. I'm passionate about Solving Problems, Data Structures, Algorithms, and Web Development, UI engineering, and creative coding.
        <br />
        I solve daily challenges with innovative solutions.
      </p>
      <p className="mt-2 max-w-md mx-auto md:mx-0 text-base text-gray-200">
        When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
      </p>
      <button
        className="mt-6 py-2 px-6 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-700 transition"
        onClick={() => alert("View Resume (Demo)")}
      >
        View Resume
      </button>
    </div>
  );
}