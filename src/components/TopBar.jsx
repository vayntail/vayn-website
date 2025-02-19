import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar flex justify-between">
      <Button text={"Vayn's website"} />
      <div className="flex">
        <Button text={"Twitter"} url="https://x.com/vayntail" />
        <Button text={"Instagram"} url="https://www.instagram.com/vayntail/" />
      </div>
    </div>
  );
};

const Button = (props) => {
  return (
    <a className="button hover:bg-gray-4" href={props.url} target="_blank">
      {props.text}
    </a>
  );
};

export default TopBar;
