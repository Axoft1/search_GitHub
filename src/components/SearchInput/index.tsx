import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import axiosInstance from "../../api";
import { IUser } from "../../Types";
import "./index.css";
interface Props {
  setSearchTerm: (e: string) => void;
  searchTerm: string;
  sort: "asc" | "desc";
  setSort: (e: "asc" | "desc") => void;
}

const Main: FC<Props> = ({ setSearchTerm, searchTerm, setSort, sort }) => {
  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <input
        className="text-field__input"
        type="text"
        value={searchTerm}
        placeholder="Name please"
        onChange={handleSearchChange}
      />
      <button className="btn" onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
        {sort === "asc" ? "По возрастанию" : "По убыванию"}
      </button>
    </div>
  );
};

export default Main;
