import { useState, useRef } from "react";

const Window = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    console.log("Dragging!");
    const offsetX = e.clientX - windowRef.current.offsetLeft;
    const offsetY = e.clientY - windowRef.current.offsetTop;

    // functions
    const handleMouseMove = (e) => {
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;

      // update position
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      console.log("Dragging stopped!"); // turn off event listeners when mouse up
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={windowRef}
      className="Window p-1.5 absolute bg-gray-200 flex flex-col"
      style={{
        top: position.y, // change to percentage later.
        left: position.x,
        width: props.width,
        height: props.height,
      }}
    >
      {/* top bar */}
      <div
        className="bg-[#DDC9C9] pl-3 flex justify-between h-fit"
        onMouseDown={handleMouseDown}
      >
        {props.title}
        <button onClick={props.onClose} className="border border-black">
          <img className="h-full" src="/icons/xmark.svg" />
        </button>
      </div>
      {/* content */}
      {props.view}
    </div>
  );
};

export default Window;
