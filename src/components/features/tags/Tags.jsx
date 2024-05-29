import TagComponent from "./TagComponent";

function Tags() {
  return (
    <div className="h-full w-full">
      <div className="flex h-28 w-full items-center justify-between pl-4">
        <h1 className="text-2xl font-medium">Tags</h1>
      </div>
      <p className="mb-4 pl-4 ">
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </p>
      <div className="flex w-full justify-between ">
        <form className="flex items-center justify-center pl-4">
          <input
            className=" h-8 w-full rounded border border-stone-400 bg-search-image bg-[length:20px_20px] bg-[5px_5px] bg-no-repeat pl-7 text-sm outline-none ring-offset-2   focus:ring-2 focus:ring-orange-shade "
            type="search"
            placeholder="Filter by tag name"
          />
        </form>

        <div className="flex h-12 w-48 items-center justify-center rounded-lg border">
          <div className="cursor-pointer rounded-md p-2 text-center hover:bg-slate-100">
            Popular
          </div>
          <div className="cursor-pointer rounded-md  p-2 text-center hover:bg-slate-100">
            Name
          </div>
          <div className="cursor-pointer rounded-md p-2 text-center hover:bg-slate-100">
            New
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row flex-wrap justify-center gap-2 p-4">
        {Array.from({ length: 20 }, (_, index) => (
          <TagComponent key={index} />
        ))}
      </div>
    </div>
  );
}

export default Tags;
