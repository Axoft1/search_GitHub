import React, { FC } from "react";
import "./index.css";

interface Props {
  setPage: (e: any) => void;
  pages: number;
  page: number;
}
const Pagination: FC<Props> = ({ setPage, pages, page }) => {
  const arr = Array.from({ length: pages }, (_, i) => i + 1).splice(0, 10);
  console.log(pages);

  return (
    <ul className="pagination">
      {arr.length>1 &&arr.map((e) => (
        <li onClick={() => setPage(e)}>
          <div className={e === page ? "active" : ""}>{e}</div>{" "}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
