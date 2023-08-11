import Title from "./utils/Title";
import Items from "./utils/Items";
import PropTypes from "prop-types";
const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "
          } `}
        >
          {items?.map((item, index) => (
            <Items {...item} key={index} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};
Sales.propTypes = {
  endpoint: PropTypes.object.isRequired,
  title: PropTypes.string,
  ifExists: PropTypes.bool,
};

export default Sales;
