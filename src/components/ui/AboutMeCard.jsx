import myImageUrl from "../../assets/myOfficial.jpg";

export default function AboutMeCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4">
      <img
        src={myImageUrl}
        alt="Harish Chouhan"
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover rounded-full mb-4 shadow-lg"
      />
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Harish Chouhan</h1>
      <p className="max-w-md text-sm sm:text-base md:text-lg text-gray-200 text-center">
        I'm Harry, from Jammu & Kashmir, India.
      </p>
      <p className="max-w-md text-sm sm:text-base md:text-lg text-gray-200 text-center">
        DSA | CP | WebDev 
      </p>
    </div>
  );
}
