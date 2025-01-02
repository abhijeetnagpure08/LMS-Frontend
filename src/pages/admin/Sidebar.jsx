import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="flex">
      {/* <div className="hidden lg:block w-[250px] sm:w-[300px] space-y-8 border-r border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-[#141414] p-5 sticky top-0  h-screen"> */}
      <div className="hidden lg:block w-[250px] sm:w-[300px] space-y-8 border-r border-gray-300 dark:border-gray-700 p-5 sticky top-0  h-screen">
        <div className="mt-5 space-y-4 ">
          <Link to="dashboard" className="flex items-center gap-2">
            <ChartNoAxesColumn size={22} />
            <h1>Dashboard</h1>
          </Link>
          <Link to="course" className="flex items-center gap-2">
            <SquareLibrary size={22} />
            <h1>Courses</h1>
          </Link>
        </div>
      </div>
      <div className="flex-1 md:p-10 p-2">
        <Outlet />
      </div>
    </div>
  );
};

