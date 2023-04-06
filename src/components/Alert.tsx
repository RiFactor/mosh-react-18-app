import { ReactNode, useState } from "react";
import Button from "./Button";
import classNames from "classnames";

interface IProps {
  children: ReactNode;
}

const Alert = ({ children }: IProps) => {
  return (
    <div
      role="alert"
      className={classNames("alert alert-warning alert-dismissible fade show")}
    >
      {children}
    </div>
  );
};

export default Alert;
