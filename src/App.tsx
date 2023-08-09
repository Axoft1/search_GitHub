import React, { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import axiosInstance from "./api";
import { IUser } from "./Types";
import Users from "./components/Users";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sort, setSort] = useState<"asc" | "desc">("desc");
  const [items, setItems] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const limit = 20;

  useEffect(() => {
    setPages(Math.ceil(items / limit));
  }, [items]);

  useEffect(() => {
    async function fetchUsers() {
      if (searchTerm) {
        try {
          const response = await axiosInstance.get(`/users`, {
            params: {
              q: `${searchTerm}`,
              page: page,
              per_page: 10,
              order: sort,
              sort: "repositories",
            },
          });
          if (response.status === 200) {
            setItems(response.data.total_count);
            setUsers(response.data.items);
          }
        } catch (e: any) {
          setErrorMsg(e.message as string);
        }
      }
    }
    fetchUsers();
  }, [page, searchTerm, sort]);

  return (
    <div className="App">
      <SearchInput
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        sort={sort}
        setSort={setSort}
      />
      {!users && errorMsg && <>Превышен лимит запросов, подождите</>}

      {users && users.map((e) => <Users key={e.id} users={e} />)}
      <Pagination setPage={setPage} pages={pages} page={page} />
    </div>
  );
}

export default App;
