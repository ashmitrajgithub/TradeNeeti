import useScrollAnimation from "../../UseScrollAnimation";
const CoursesItems = ({ image, name, detail }) => {
  useScrollAnimation();

    return (
      <div className="bg-[rgb(255,255,255)] rounded-lg overflow-hidden hover:shadow-lg transform hover:-translate-y-5 transition-transform duration-500 courses shadow-custom fade-in scroll-animate slide-left">
        <div className="w-full h-52 p-2 box-border ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between gap-4 p-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-base leading-6 text-gray-600">{detail}</p>
          </div>
          <div className="flex justify-start gap-6">
            <button className="px-4 py-2 rounded bg-sky-500 text-white font-bold text-sm transition-colors duration-300 hover:bg-sky-600">
              done
            </button>
            <button className="px-4 py-2 rounded bg-sky-500 text-white font-bold text-sm transition-colors duration-300 hover:bg-sky-600">
              code
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CoursesItems;
  