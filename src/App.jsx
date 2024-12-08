import React from 'react'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default App

// import React, { useState, useEffect } from "react";

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     document.body.className = darkMode
//       ? "body bg-[#0F172A] dark"
//       : "body bg-white";
//   }, [darkMode]);

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <div>
//       {/* Top Navbar */}
//       <div className="fixed w-full z-30 flex bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
//         <div className="logo ml-12 dark:text-white transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
//           NERVE
//         </div>
//         <div className="grow h-full flex items-center justify-center"></div>
//         <div className="flex-none h-full text-center flex items-center justify-center">
//           <div className="flex space-x-3 items-center px-3">
//             <div className="flex-none flex justify-center">
//               <div className="w-8 h-8 flex">
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShta_GXR2xdnsxSzj_GTcJHcNykjVKrCBrZ9qouUl0usuJWG2Rpr_PbTDu3sA9auNUH64&usqp=CAU"
//                   alt="profile"
//                   className="shadow rounded-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="hidden md:block text-sm md:text-md  text-white">
//               John Doe
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed z-50 flex h-screen bg-[#1E293B] transition-transform transform ease-in-out duration-500 ${
//           isSidebarOpen ? "w-60" : "w-20"
//         }`}
//       >
//         {/* Sidebar Toggle Button */}
//         <div
//           onClick={toggleSidebar}
//           className="absolute top-2 -right-6 transition transform ease-in-out duration-300 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 p-3 rounded-full text-white hover:rotate-45 cursor-pointer"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={3}
//             stroke="white"
//             className="w-4 h-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6A2.25 2.25 0 066 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 066 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
//             />
//           </svg>
//         </div>

//         {/* Sidebar Content */}
//         <div className="mt-20 flex flex-col space-y-2">
//           {["Home", "Table", "Graph"].map((item) => (
//             <div
//               key={item}
//               className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="white"
//                 className="w-4 h-4"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                 />
//               </svg>
//               <div
//                 className={`${
//                   isSidebarOpen ? "block" : "hidden"
//                 } transition-opacity duration-300`}
//               >
//                 {item}
//               </div>
//             </div>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content */}
//       {/* <div className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4">
//         <nav
//           className="flex px-5 py-3 text-gray-700 rounded-lg bg-gray-50 dark:bg-[#1E293B]"
//           aria-label="Breadcrumb"
//         >
//           <ol className="inline-flex items-center space-x-1 md:space-x-3">
//             <li className="inline-flex items-center">
//               <a
//                 href="#"
//                 className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//               >
//                 <svg
//                   className="w-4 h-4 mr-2"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
//                 </svg>
//                 Home
//               </a>
//             </li>
//           </ol>
//         </nav>
//         <div className="flex flex-wrap my-5 -mx-2">
//           <div className="w-full lg:w-1/3 p-2">
//             <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
//               <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="object-scale-down transition duration-500"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15 19.128a9.38 9.38 0 01-6 0V5.5a3 3 0 116 0v13.628z"
//                   />
//                 </svg>
//               </div>
//               <div className="flex flex-col justify-around flex-grow ml-5 text-white">
//                 <div className="text-xs whitespace-nowrap">Tasks Completed</div>
//                 <div className="">{Math.floor(Math.random() * 100)}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Dashboard;
