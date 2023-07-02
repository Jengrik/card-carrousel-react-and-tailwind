import ViteLogo from "../assets/images/ViteLogo";
import ReactLogo from "../assets/images/ReactLogo";
import TailwindLogo from "../assets/images/TailwindLogo";

const Presentation = () => {
  return (
    <>
      <main className="w-[80%] p-5 flex flex-col justify-center items-center">
        {/* Title */}
        <section className="mb-5 text-center">
          <h1 className="font-semibold text-md sm:text-xlg">
            Card Carrousel <br />
            React & Tailwind
          </h1>
        </section>
        {/* Icons Bar */}
        <section className="w-[80%] grid grid-cols-3 sm:w-[30%]">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <ReactLogo className="px-3" />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <TailwindLogo className="px-3" />
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <ViteLogo className="px-3" />
          </a>
        </section>
        {/* Explanation */}
        <section className="text-center text-xs sm:text-regular">
          <p className="my-4">
            This repository provide a Card Carrousel using ReactTS and Tailwind.
          </p>
          <p className="my-4">
            On the other hand, to know the code of this project, you can visit:
          </p>
          <a
            className="text-blue-700 mb-4 inline-block"
            href="https://github.com/Jengrik/card-carrousel-react-and-tailwind"
          >
            https://github.com/Jengrik/card-carrousel-react-and-tailwind
          </a>
          <div className="text-right font-semibold">
            <p>Designed by: Valentina Díaz</p>
            <p>Implemented by: Jhon Navarrete</p>
          </div>
        </section>
        <div className="border-grayScale-200 border-[1px] w-full mt-5"></div>
      </main>
    </>
  );
};

export default Presentation;
