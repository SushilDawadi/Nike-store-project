import { heroapi } from "../data/data";
import Clip from "./utils/Clip";
import SocialLink from "./utils/SocialLink";

const Hero = () => {
  return (
    <>
      <div className=" relative h-auto w-auto flex flex-col">
        <div className=" bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 -z-10 "></div>
        {/* div for background gradiant color */}
        <div className=" relative opacity-100 z-20 grid items-start justify-items-center nike-container">
          {/* container div */}
          <div className="grid items-center justify-items-center mt-28 md:mt24">
            {/* text content div */}
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text:2xl font-extrabold filter drop-shadow-sm text-slate-200   ">
              {heroapi.title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text:2xl font-extrabold filter drop-shadow-sm text-slate-200 ">
              {heroapi.subtitle}
            </h1>
            <button
              type="button"
              className="px-7 py-1 button-theme  bg-slate-200 shadow-slate-200 rounded-xl my-5"
            >
              {heroapi.btntext}
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto ">
              {heroapi.videos?.map((item, index) => (
                //here ? means that if heroapi.videos is null or undefined the map function won't be called.
                //If heroapi.videos exists and is an array, the map function will be applied to its elements.
                <Clip key={index} imgSrc={item.imgsrc} clip={item.clip} />
              ))}
            </div>
            {/* video links div */}
            <div className="grid items-center absolute  top-[33vh] lg:top-[27vh] right-0 gap-3 ">
              {/* social links */}
              {heroapi.sociallinks?.map((item, index) => (
                <SocialLink key={index} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="">
            <img
              src={heroapi.img}
              alt="hero-img"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[27vh] sm:h-[21vh] xsm:h-[17vh] transition-theme rotate-[-25deg] hover:rotate-0 cursor-pointer object-fill "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
