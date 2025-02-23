import React from "react";

const HomeButton = (props) => {
  return (
    <div className="text-center w-[5%] cursor-pointer">
      <img className="w-[100%]" src={props.url} />
      <p>{props.title}</p>
    </div>
  );
};

export default HomeButton;
