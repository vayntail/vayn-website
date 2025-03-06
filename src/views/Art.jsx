import { useState } from "react";
import BreadcrumbNav from "../components/Art/BreadcrumbNav";

const Art = () => {
  const [openFolder, setOpenFolder] = useState();
  return (
    <div>
      <BreadcrumbNav />
    </div>
  );
};

export default Art;
