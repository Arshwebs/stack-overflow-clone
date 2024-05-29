import { Link } from "react-router-dom";

function TagComponent() {
  return (
    <div className=" flex h-52 w-64 flex-col rounded-md border p-3 text-sm">
      <div className="flex h-1/5">
        <Link className=" rounded-md bg-slate-100 p-2"><strong>javascript</strong></Link>
      </div>
      <p className="my-2 line-clamp-3 text-sx">
        For questions about programming in ECMAScript (JavaScript/JS) and its
        different dialects/implementations (except for ActionScript). Note that
        JavaScript is NOT Java. Include all tags that are relevant to your
        question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
        [ember.js], [vue.js], [typescript], [svelte], etc.
      </p>
      <div className="mt-2 flex h-[30%] justify-between">
        <p>2530804 questions</p>
        <p>134 asked today, 1113 this week</p>
      </div>
    </div>
  );
}

export default TagComponent;
