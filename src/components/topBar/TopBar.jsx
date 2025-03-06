import React from "react";
import HomeDropdownButton from "./HomeDropdownButton";

const TopBar = () => {
  return (
    <div className="top-bar w-full flex justify-between bg-gray-200">
      <HomeDropdownButton />
      <div className="flex"></div>
    </div>
  );
};

export default TopBar;
