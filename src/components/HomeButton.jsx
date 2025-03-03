import React from "react";

const HomeButton = (props) => {
  return (
    <div className="HomeButton text-center cursor-pointer">
      <img className="w-full" src={props.url} />
      <p className="text-black">{props.title}</p>
    </div>
  );
};

export default HomeButton;
