import { AskQuestionBtn } from "../../ui/Nav";
import Questions from "./Questions";

function AllQuestions() {
  return (
    <div className="h-full w-full">
      <div className="flex h-28 w-full items-center justify-between pl-4">
        <h1 className="text-2xl font-medium">All Questions</h1>
        <AskQuestionBtn />
      </div>
      <div className="flex w-full justify-between ">
        <div className="ml-4 text-xl font-medium">2,206,705 questions</div>
        <div className="flex h-12 w-36 items-center justify-center rounded-lg border">
          <div className="cursor-pointer rounded-md p-2 text-center hover:bg-slate-100">
            Newest
          </div>
          <div className="cursor-pointer rounded-md p-2 text-center hover:bg-slate-100">
            Active
          </div>
        </div>
      </div>
      {Array.from({ length: 20 }).map((element, index) => (
        <Questions key={index + 1} />
      ))}
    </div>
  );
}

export default AllQuestions;
