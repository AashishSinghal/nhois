import * as React from "react";
import { Link } from "react-router-dom";
import "./CallToActions.css";

interface IProps {
  name: String;
  to?: String;
}

const CallToActions = ({ name, to = "/" }: IProps) => {
  return (
    <Link to={`/${to}`}>
      <div className="calltoactions">
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default CallToActions;
