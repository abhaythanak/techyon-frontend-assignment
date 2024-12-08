import React from "react";
import Card from "./Card";


const Main = ({data,text,hide}) => {
  return (
    <div className="content ml-20 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4">
      <nav
        className={`flex justify-between px-5 py-3 text-gray-700 rounded-lg ${hide}`}
        aria-label="Breadcrumb"
      >
        <div className="flex gap-5">
          <h1 className="text-3xl font-bold">Projects</h1>
          <span className="text-white text-sm font-bold ml-2 p-2 bg-blue-950 rounded">
            + Projects
          </span>
        </div>
        <div className="flex text-sm">
          <h5 className="">
            <span>Dashboard</span> /{" "}
            <span className="text-blue-600">Project Overview</span>{" "}
          </h5>
        </div>
      </nav>
      <div className="flex flex-wrap my-5 -mx-2">
        <div className="w-full  p-2">
          <div className="flex items-center  justify-between flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div className="flex gap-2  font-semibold">
              <h1>{text}</h1>
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </div>
            <div className="flex gap-3">
              <div className="">
              <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44771 1 1v3M3 9v9c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1V9M3 9h18M8 9V5m4 4V5m4 4V5m-6 9h2m0 0h2m-2 0v-2m0 2v2"/>
</svg>

              </div>
              <div className="">
                <svg
                  className="w-6 h-6 text-gray-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
                  />
                </svg>
              </div>
              <div className="">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M12 6h.01M12 12h.01M12 18h.01"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-80">{data.map((status, index) => (
        <div
          key={index}
          className={`text-white font-semibold py-2 px-4 rounded-lg ${status.color}`}
        >
          {status.name}  2
        </div>
      ))}</div>
      <div className="flex flex-wrap my-5 -mx-2 ">
      
        <div className="w-full ">
          <div className="flex justify-center items-center w-full flex-wrap gap-9 rounded-md p-3 ">
            
            <Card />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
