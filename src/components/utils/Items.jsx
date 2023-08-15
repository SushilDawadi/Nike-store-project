import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
const Items = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  return (
    <>
      {/* main div */}
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center  ${
          ifExists ? "justify-items-start" : " justify-items-center"
        }  rounded-xl py-4 px-5 transition-all duration-700 ease-out w-full hover:scale-105 `}
      >
        {/* textcontent */}
        <div
          className={`grid items-center opacity-100 z-[-100] {
          ifExists ? "justify-items-start" : " justify-items-center"
        }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          {/* rating div */}
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/100 px-1 rounded">
              <h1 className="text-black text-sm  blur-effect-theme font-medium ">
                ${price}
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style text-yellow-300 w-5 h-5 md:w-4 md:h-4 " />
              <h1 className="text-sm font-normal text-slate-100">{rating}</h1>
            </div>
          </div>
          {/* button div */}
          <div className="flex items-center gap-3 ">
            <button
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme py-1 px-1 shadow shadow-sky-200"
            >
              <ShoppingBagIcon className="icon-style text-black" />
            </button>
            <button
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme py-1 px-2 shadow shadow-sky-200 text-sm"
            >
              {btn}
            </button>
          </div>
        </div>
        {/* image div */}
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : " justify-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img${id}`}
            className={` transition-theme hover:-rotate-12 ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  );
};
Items.propTypes = {
  endpoint: PropTypes.object,
  title: PropTypes.string,
  img: PropTypes.string,
  btn: PropTypes.string,
  color: PropTypes.string,
  shadow: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  ifExists: PropTypes.bool,
};

export default Items;
