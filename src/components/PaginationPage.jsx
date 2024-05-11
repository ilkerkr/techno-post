import { useState } from "react";

const PaginationPage = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);
  const handlePageClick = (number) => {
    setActivePage(number);
    paginate(number);
  };

  return (
    <div>
      <nav className="pb-5">
        <ul>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={number == currentPage ? "active" : ""}
              onClick={() => {
                handlePageClick(number);
                paginate(number);
              }}
            >
              {number}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationPage;
