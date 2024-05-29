import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-stackoverflow.png";
import profilePic from "../../assets/978396.jpg";
import { useRef, useState } from "react";

function Nav() {
  const [searchToolTip, setSearchToolTip] = useState(false);

  const searchInputElement = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form logged");
  }

  function handleOnBlur() {
    setSearchToolTip(false);
  }

  return (
    <div className="my-0 w-full bg-white ">
      <nav className="flex h-14 w-full items-center justify-between border-b-2 px-32 ">
        <img className="h-15 w-36 " src={logo} />
        <NavLink
          to="/questions"
          className="mx-3 p-2 text-sm text-slate-500 hover:rounded hover:bg-slate-300"
        >
          Questions
        </NavLink>
        <NavLink
          to="/tags"
          className="mx-3 p-2 text-sm  text-slate-500 hover:rounded hover:bg-slate-300"
        >
          Tags
        </NavLink>
        <NavLink
          to="company"
          className="mx-3 p-2 text-sm  text-slate-500 hover:rounded hover:bg-slate-300"
        >
          Companies
        </NavLink>
        <form className="relative mx-2 flex-1" onSubmit={handleSubmit}>
          <input
            onFocus={() => setSearchToolTip(true)}
            onBlur={handleOnBlur}
            ref={searchInputElement}
            type="search"
            className=" h-8 w-full rounded border border-stone-400 bg-search-image bg-[length:20px_20px] bg-[5px_5px] bg-no-repeat pl-7 text-sm outline-none ring-offset-2   focus:ring-2 focus:ring-orange-shade "
            placeholder="Search..."
          />
          <div
            onMouseDown={(e) => e.preventDefault()}
            className={`before:content-[' '] absolute top-12 bg-white  ${searchToolTip ? "flex" : "hidden"} h-44 w-full flex-col rounded border shadow-lg before:absolute before:bottom-full before:left-2/4 before:ml-[-5px] before:border-[10px] before:border-solid before:border-b-stone-200 before:border-l-transparent before:border-r-transparent before:border-t-transparent before:shadow-lg  `}
          >
            <div className="flex h-48 w-full p-4">
              <div className="h-full w-full">
                <p className="my-1 text-sm">
                  [&nbsp;tag&nbsp;]&nbsp;
                  <span className="text-slate-500	">search within a tag</span>
                </p>
                <p className="my-1 text-sm">
                  user:1234&nbsp;
                  <span className="text-slate-500	">search by author</span>
                </p>
                <p className="my-1 text-sm">
                  &quot;words here&quot;
                  <span className="text-slate-500	"> exact phrase</span>
                </p>
              </div>
            </div>
            <div className="flex h-[30%] w-full items-center justify-start border border-b-0 border-l-0 border-r-0 p-3">
              <AskQuestionBtn
                setToolTip={setSearchToolTip}
                searchInputElement={searchInputElement}
                enableToolTip={true}
              />
            </div>
          </div>
        </form>
        <NavLink
          className="mx-2 h-7 w-7 rounded-md border bg-slate-600"
          to="/user/dsjnij/khjbjhb"
        >
          <img className=" object-fill" src={profilePic} />
        </NavLink>
      </nav>
    </div>
  );
}

export function AskQuestionBtn({
  setToolTip,
  searchInputElement,
  enableToolTip,
}) {
  function handleAskQuestions() {
    setToolTip(true);
    searchInputElement.current.blur();
  }

  return (
    <div className="flex h-8 w-32 items-center justify-center rounded border bg-primary-btn hover:bg-primary-btn-dark">
      <NavLink
        to="/ask"
        onMouseUp={enableToolTip ? handleAskQuestions : null}
        className="text-left text-sm text-white"
      >
        Ask Questions
      </NavLink>
    </div>
  );
}

export default Nav;
