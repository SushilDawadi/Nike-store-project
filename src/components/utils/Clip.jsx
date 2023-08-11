import { PlayIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const Clip = ({ clip, imgSrc }) => {
  return (
    <>
      <div className="relative h-28 w-32 overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 mg:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14">
        <img
          src={imgSrc}
          alt="img/clips"
          className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500 "
        />
        <div className="'bg-white absolute top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-4 right-0 opacity-100 z-[100] w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-xl ">
          <PlayIcon className="k icon-style  md:w-3 md:h-3 text-cyan-50" />
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute top-0 left-0 right-0 flex h-full  w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 group-hover:rounded-xl "
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  );
};
Clip.propTypes = {
  clip: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Clip;
