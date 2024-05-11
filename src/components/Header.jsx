import { FaBell } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";

const Header = ({ data }) => {
  return (
    <div className="d-flex justify-content-between container  bg-warning align-items-center p-3 rounded-2">
      <div className="d-flex gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0gvILytZd3HCQbm8_2KuDqpC6XsICqQBzZs8jfW3Vw&s"
          alt="img"
          width={"100px"}
          className="rounded-pill"
        />
        <h2>Techno Post</h2>
      </div>
      <div className="d-flex gap-2 justify-content-center align-items-end fs-2">
        <button className="btn btn-dark position-relative ">
          Post <span className="lenght">{data.length}</span>
        </button>
        <FaBell className="bell" />
        <BsFillGridFill className="fill" />
        <img
          src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png"
          alt="img"
          width={"30px"}
          className="bg-dark rounded"
        />
      </div>
    </div>
  );
};

export default Header;
