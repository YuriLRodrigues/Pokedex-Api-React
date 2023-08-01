import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PropsTypes } from "prop-types";

const Pagination = (props) => {
  const { page, totalPages, previousClick, nextClick } = props;
  return (
    <div className="pagination-container">
      <button onClick={previousClick}><AiOutlineArrowLeft /></button>
      <div>
        {page}/{totalPages}
      </div>
      <button onClick={nextClick}><AiOutlineArrowRight /></button>
    </div>
  );
};

// Pagination.propTypes = {
//   page: PropsTypes.string,
//   totalPages: PropsTypes.string,
//   previousClick: PropsTypes.func,
//   nextClick: PropsTypes.func,
// };

export default Pagination;
