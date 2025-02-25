import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar w-full flex justify-between">
      <Button text={"Vayn's website"} />
      <div className="flex">
        <Button
          text={"Twitter"}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
            </svg>
          }
          url="https://x.com/vayntail"
        />
        <Button
          text={"Instagram"}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
            </svg>
          }
          url="https://www.instagram.com/vayntail/"
        />
      </div>
    </div>
  );
};

const Button = (props) => {
  return (
    <a
      className="px-2 md:px-4 border border-gray-2 hover:bg-gray-4 flex justify-center items-center gap-2"
      href={props.url}
      target="_blank"
    >
      {props.svg && props.svg}
      {props.text}
    </a>
  );
};

export default TopBar;
