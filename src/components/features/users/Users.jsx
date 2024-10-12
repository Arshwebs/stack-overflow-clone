// import UserComponent from "./UserComponent";

import { Outlet } from "react-router-dom";

function Users() {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
}

export default Users;
