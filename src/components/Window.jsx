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
      className="window p-1.5"
      style={{
        top: position.y,
        left: position.x,
        width: props.width,
      }}
    >
      {/* top bar */}
      <div
        className="bg-[#DDC9C9] pl-3 mb-2 flex justify-between"
        onMouseDown={handleMouseDown}
      >
        {props.title}
        <button className="border border-black">x</button>
      </div>
      {/* content */}
      {props.view}
    </div>
  );
};

export default Window;
