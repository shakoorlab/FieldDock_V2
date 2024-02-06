import React from "react";
import "../../css/users.css";

function Users() {
  return (
    <>
      <div className="page-title-box">
        <h3>Users</h3>
      </div>
      <div className="button-container">
        <button className="choice-button">Create User</button>
        <button className="choice-button">Edit User</button>
      </div>
    </>
  );
}

export default Users;
