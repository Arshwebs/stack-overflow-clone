import { NavLink } from "react-router-dom";

import userIcon from "../../assets/svgviewer-png-output.png";
import homeIcon from "../../assets/icons8-home-50.png";
import companyIcon from "../../assets/icons8-company-50.png";
import tagsIcon from "../../assets/icons8-tags-50.png";
import questionsIcon from "../../assets/svgviewer-png-output.png";
import savesIcon from "../../assets/svgviewer-png-output (1).png";

function Sidebar() {
  return (
    <div className="sticky top-14 flex h-screen w-36 flex-col items-start border border-y-0 border-l-0 border-r-2">
      <div className="mb-3 mt-8 flex w-full border-none p-2 hover:rounded-l-lg hover:bg-slate-300">
        <img className="r mx-2 h-5 w-5" src={homeIcon} />

        <NavLink to="/" className=" flex items-center text-center text-sm">
          Home 
        </NavLink>
      </div>

      <div className="mb-3 flex w-full border-none p-2 hover:rounded-l-lg hover:bg-slate-300">
        <img className="mx-2 h-5 w-5 " src={questionsIcon} />

        <NavLink
          to="/questions"
          className=" flex items-center text-center text-sm"
        >
          Questions
        </NavLink>
      </div>
    
    <div className="mb-3 flex w-full border-none p-2 focus-within:rounded-l-lg focus-within:bg-slate-300 hover:rounded-l-lg hover:bg-slate-300">
        <img className="mx-2 h-5 w-5 " src={tagsIcon} />

        <NavLink to="/tags" className="focus:font-bold flex items-center text-center text-sm">
          Tags
        </NavLink>
      </div>

      <div className="h-5">{/* empty space */}</div>

    <div className="mb-3 flex w-full border-none p-2 focus-within:rounded-l-lg focus-within:bg-slate-300 hover:rounded-l-lg hover:bg-slate-300">
        <img className="mx-2 h-5 w-5 " src={userIcon} />

        <NavLink to="/users" className="focus:font-bold  flex items-center text-center text-sm">
          Users
        </NavLink>
      </div>

      <div className="mb-3 flex w-full border-none p-2 hover:rounded-l-lg hover:bg-slate-300">
        <img className="mx-2 h-5 w-5 " src={savesIcon} />

        <NavLink to="/saves" className=" flex items-center text-center text-sm">
          Saves
        </NavLink>
      </div>

      <div className="mb-3 flex w-full border-none p-2 hover:rounded-l-lg hover:bg-slate-300">
        <img className="mx-2 h-5 w-5 " src={companyIcon} />
        <NavLink
          to="/company"
          className=" flex items-center text-center text-sm"
        >
          Companies
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
