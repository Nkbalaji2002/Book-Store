import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BackButton = ({ destination = "/" }) => {
  return (
    <>
      <div className="flex">
        <Link
          to={destination}
          className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
        >
          <ArrowBackIosIcon className="text-2xl" />
        </Link>
      </div>
    </>
  );
};

export default BackButton;
