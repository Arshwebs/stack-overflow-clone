import { Link } from "react-router-dom";
import userPic from "../../../assets/978396.jpg";
function UserComponent() {
  return (
    <div className=" flex h-32 w-64 items-center  gap-2 rounded-md  p-3 text-sm">
      <img className="h-20 w-20" src={userPic} />
      <div className="flex-col">
        <div className="flex ">
          <Link to="/" className="">
            <strong>Name</strong>
          </Link>
        </div>
        <p className="text-sx my-2 line-clamp-3">City</p>
        <div className="mt-2 flex justify-between">
          <Link>tag</Link>
          <Link>tag</Link>
          <Link>tag</Link>
        </div>
      </div>
    </div>
  );
}

export default UserComponent;
