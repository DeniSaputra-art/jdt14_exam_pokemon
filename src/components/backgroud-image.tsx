import { Outlet } from "react-router-dom";
import backgroundImage from "../img/background.png";

const BackgourdImage = () => {
  return (
    <div
      className="min-h-screen w-full bg-repeat-y bg-center bg-contain"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Outlet />
    </div>
  );
};

export default BackgourdImage;
