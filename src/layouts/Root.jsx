import { Outlet, Link } from "@tanstack/react-router";
import { answerRouteList, routeList } from "../router";

const Root = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-rootLayout">
      <nav className=" p-8 bg-slate-100 flex flex-col gap-4 max-h-screen overflow-y-auto">
        <h1 className="text-2xl font-bold">Exercises</h1>
        {routeList.map((routeInfo) => (
          <Link
            to={routeInfo.path}
            key={routeInfo.path}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded transition-all duration-200"
            activeProps={{ className: "bg-slate-400 font-bold" }}
          >
            {routeInfo.label}
          </Link>
        ))}
        <hr />
        <h1 className="text-2xl font-bold">Answers</h1>
        {answerRouteList.map((routeInfo) => (
          <Link
            to={routeInfo.path}
            key={routeInfo.path}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded transition-all duration-200"
            activeProps={{ className: "bg-slate-400 font-bold" }}
          >
            {routeInfo.label}
          </Link>
        ))}
      </nav>
      <main className="flex flex-col p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
