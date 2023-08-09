import React, { FC, useContext, useState } from "react";
import { IUser } from "../../Types";
import './index.css'
import UserInfo from "./UserInfo";

interface Props {
  users: IUser;
}
const Users: FC<Props> = ({ users }) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      {users && (
        <div className="card" onClick={() => setShow(!show)}>
          <div className="avatar">
            <img src={users.avatar_url} alt="" />
          </div>
          <div>
            <div >{users.login}</div>
          </div>
        </div>
      )}
      {show && <UserInfo user={users} setShow={setShow} />}
    </div>
  );
};

export default Users;
