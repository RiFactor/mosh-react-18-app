import React from "react";
import Button from "./Button";
import { MouseEvent } from "react";
import classNames from "classnames";

// interface IProps {
//   onClick: (event: MouseEvent) => void;
// }

const handleClose = () => {
  console.log("hide");
};

const DismissibleAlert = () => {
  return (
    <div className="show">
      hello
      <Button onClick={handleClose}>X</Button>
    </div>
  );
};

export default DismissibleAlert;
