import PropTypes from "prop-types";
const Footer = ({ footer: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full mx-auto md:max-w-none md:gap-5">
            {titles.map((item, index) => (
              <div key={index} className="grid items-center">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {item.title}
                </h1>
              </div>
            ))}
            {links.map((list, index) => (
              <ul key={index} className="grid items-center gap-1">
                {list.map((link, index) => (
                  <li className="text-sm sm:text-xs" key={index}>
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-5 text-center text-slate-100">
          <p className="text-sm md:text-center ">
            Copyright<sup className="text-base font-bold">&copy;</sup>All
            Reserved Rights 2023{" "}
            <span className="font-semibold">Made by Sushil</span>
          </p>
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {
  footer: PropTypes.object,
  title: PropTypes.array,
  links: PropTypes.array,
};
export default Footer;
