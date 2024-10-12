import UserComponent from "./UserComponent";

function AllUsers() {
  return (
    <>
      <div className="flex h-28 w-full items-center justify-between pl-4">
        <h1 className="text-2xl font-medium">Users</h1>
      </div>
      <div className="flex w-full justify-between ">
        <form className="flex items-center justify-center pl-4">
          <input
            className=" h-8 w-full rounded border border-stone-400 bg-search-image bg-[length:20px_20px] bg-[5px_5px] bg-no-repeat pl-7 text-sm outline-none ring-offset-2   focus:ring-2 focus:ring-orange-shade "
            type="search"
            placeholder="Filter by user name"
          />
        </form>
      </div>
      <div className="flex w-full flex-row flex-wrap justify-center gap-2 p-6">
        {Array.from({ length: 20 }, (_, index) => (
          <UserComponent key={index} />
        ))}
      </div>
    </>
  );
}

export default AllUsers;
