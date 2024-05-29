import profileImg from "../../../assets/978396.jpg";

function Questions() {
  return (
    <div>
      <div className="my-4 flex w-full justify-between border-y p-3">
        <div className="flex w-[20%] justify-end pr-3">
          <div className="flex flex-col text-right">
            <div>0 votes</div>
            <div>1 answer</div>
            <div>100 views</div>
          </div>
        </div>
        <div className="flex w-[80%] flex-col">
          <h1 className="text-blue-600">
            Use Datediff with specific condition value in one table
          </h1>
          <div className="line-clamp-2 my-2 text-sm">
            IIII have the following table : A header Another header First row
            Second row IDno name date status c123 Ryan 10/05/2024 arrival f738
            Tom 10/05/2024 arrival c123 Ryan 13/05/2024 arrival f738 Tom ...

          </div>
          <div className="flex justify-between">
            <div className="flex justify-evenly gap-2">
              <div className="rounded bg-blue-50 p-2 text-center text-sm">
                sql
              </div>
              <div className="rounded bg-blue-50 p-2 text-center text-sm">
                mysql
              </div>
            </div>
            <div>
              <ul className="flex gap-1 text-sm">
                <li className="w-6">
                  <img src={profileImg} />
                </li>
                <li className="text-blue-500">name</li>
                <li className="text-stone-500">
                  asked<time> Sep 7, 2016 at 7:33</time>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
