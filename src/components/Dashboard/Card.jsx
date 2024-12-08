import React from "react";

const Card = () => {
  const users = [
    { id: 1, name:"Project Name", img: "https://i.pravatar.cc/150?img=1" },
    { id: 2,name:"Project Name", img: "https://i.pravatar.cc/150?img=2" },
    { id: 3,name:"Project Name", img: "https://i.pravatar.cc/150?img=3" },
    { id: 4,name:"Project Name",img: "https://i.pravatar.cc/150?img=4" },
    { id: 5,name:"Project Name", img: "https://i.pravatar.cc/150?img=5" },
    { id: 6,name:"Project Name", img: "https://i.pravatar.cc/150?img=6" },
    { id: 7,name:"Project Name", img: "https://i.pravatar.cc/150?img=7" },
    { id: 8,name:"Project Name", img: "https://i.pravatar.cc/150?img=8" },
    { id: 9,name:"Project Name", img: "https://i.pravatar.cc/150?img=9" },
    { id: 10,name:"Project Name", img: "https://i.pravatar.cc/150?img=10" },
    { id: 11,name:"Project Name", img: "https://i.pravatar.cc/150?img=11" },
    { id: 12,name:"Project Name", img: "https://i.pravatar.cc/150?img=12" },
  ];

  return (
    <>
    {users.map(item=>{
        return(
            <div className="w-96 h-64 bg-white rounded-xl shadow-2xl hover:scale-105 duration-500   p-3" key={item.id}>
        <div className="flex justify-between mt-3">
          <div className="flex gap-2">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"
              />
            </svg>
            <h1>{item.name}</h1>
          </div>
          <div className="">ID: P-11</div>
        </div>
        <div className="flex font-semibold mt-6">
          07{" "}
          <div className="relative w-full bg-gray-100 rounded-full text-center font-bold">
            <div className="bg-green-400 w-[60%] h-full  rounded-full">
              <span className="ml-28">50%</span>
            </div>
          </div>{" "}
          14
        </div>

        <div className="flex items-center gap-3 my-7">
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
              d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
            />
          </svg>

          <p className="text-sm font-semibold">01/01/2024 - 31/01/2024</p>
        </div>
        <hr />
        <div className="mt-7">
          <div className="relative items-center">
            <div className=" relative">
              <img
                className="w-10 left-10 rounded-full absolute"
                src="https://i.pravatar.cc/150?img=12"
                alt=""
              />
              <img
                className="w-10 left-5 rounded-full absolute"
                src="https://i.pravatar.cc/150?img=12"
                alt=""
              />
              <img
                className="w-10  rounded-full absolute"
                src="https://i.pravatar.cc/150?img=12"
                alt=""
              />
              
            </div>
            <div className="flex justify-end items-center">
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
                  d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z"
                />
              </svg>

              <h1>12 Files</h1>
            </div>
          </div>
        </div>
      </div>
        )
    })}
      
    </>
  );
};

export default Card;
