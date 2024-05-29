import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="h-full">
      <div className="fixed top-0 z-50 h-1 w-full bg-orange-shade"></div>
      <div className="fixed top-1 z-50 w-full  border border-x-0 border-b-[0.5px] border-t-0 ">
        <Nav />
      </div>
      <div className="relative top-14 mx-32 flex h-full">
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
