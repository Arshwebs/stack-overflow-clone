import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

function Profile() {
  const [userName] = useState("Mohamed Arsath");

  const params = useParams();
  console.log(params);
  return (
    <div className="flex w-full flex-col justify-start pl-8 pt-8">
      <div className="flex w-full items-center">
        <div className="w-[20%]">
          <img src="" alt="profile photo" />
        </div>
        <div className="flex w-full flex-1 flex-col">
          <h1>{userName}</h1>
          <p className="flex">
            <img />
            &nbsp;
            <span>Member for 2 years, 9 months</span>&nbsp;
            <img />
            &nbsp;
            <span>Last seen this week</span>&nbsp;
            <img />
            &nbsp;
            <span>Visited 76 days, 1 consecutive</span>&nbsp;
          </p>
        </div>
      </div>
      <div className="flex w-full justify-start pt-8 text-sm ">
        <div className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg ">
          <Link
            to=""
            className="cursor-pointer rounded-md p-2 text-center focus-within:bg-slate-100 hover:bg-slate-100"
          >
            Profile
          </Link>
          <div className="foucs:bg-slate-100 cursor-pointer rounded-md p-2 text-center hover:bg-slate-100">
            Save
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Profile;
