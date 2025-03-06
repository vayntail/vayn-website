import { useState } from "react";

const HomeDropdownButton = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleOnClick = () => {
    setDropdownVisible(true);
  };

  const handleOnMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="w-fit">
      <button
        onClick={handleOnClick}
        // onMouseLeave={handleOnMouseLeave}
        className=" border-gray-2 hover:bg-gray-4 w-full"
      >
        Vayn's website
      </button>
      {isDropdownVisible && (
        <ul
          onMouseLeave={handleOnMouseLeave}
          className="absolute bg-gray-100 w-fit"
        >
          <li>about this pc</li>
          <li>log off</li>
        </ul>
      )}
    </div>
  );
};

export default HomeDropdownButton;
