import React, { FC, useEffect, useState } from "react";
import { IRepo, IUser } from "../../../Types";
import "./index.css";
import axios from "axios";

interface Props {
  user: IUser;
  setShow: (e:boolean)=>void
}

const UserInfo: FC<Props> = ({ user, setShow }) => {
  const [repo, setRepo] = useState<IRepo[]>();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(`${user.repos_url}`, {});
        if (response.status === 200) {
          setRepo(response.data.splice(0,20));
        }
      } catch (e: any) {}
    }
    fetchUsers();
  }, [user]);

  return (
    <div className="userInfo">
      <div className="userInfo__card">
        <div
          className="userInfo__card_close"
          onClick={() => setShow(false)}
        ></div>
        <div className="userInfo__card_body">
          <div className="card_body_img">
            <img src={user.avatar_url} alt="avatar" />
          </div>
          <div className="card_body_info">
            <div>
              Логин: <b>{user.login}</b>{" "}
            </div>
            <a href={user.html_url} data-testid="html_url">
              <b>Открыть все Репозиторий</b>
            </a>
            {repo &&
              repo.map((e) => (
                <div>
                  <a href={e.html_url}>{e.name}</a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
