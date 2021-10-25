import * as React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Backbutton = () => {
  return (
    <Link to="/">
      <div className="backButton">
        <IoMdArrowRoundBack />
      </div>
    </Link>
  );
};

export default Backbutton;
