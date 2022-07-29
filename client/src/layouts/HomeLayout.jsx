import React from "react";
import MobileNavbar from "../components/Navbar/MobileNavbar";
import Navbar from "../components/Navbar/Navbar";

function HomeLayout({ children }) {
  console.log(children);
  return (
    <div className="w-full h-full">
      <Navbar />
      <div>
        {children}
        <div className="h-16 bg-white"></div>
      </div>
      <MobileNavbar />
    </div>
  );
}

export default HomeLayout;
