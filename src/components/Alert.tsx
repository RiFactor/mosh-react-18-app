import { ReactNode, useState } from "react";
import Button from "./Button";
import classNames from "classnames";

interface IProps {
  children: ReactNode;
}

const Alert = ({ children }: IProps) => {
  const [hideAlert, setHideAlert] = useState(false);

  // const hide = false;
  const handleClose = () => {
    console.log("handle close alert");
    setHideAlert(true);
    console.log(hideAlert);
  };

  return (
    <div
      role="alert"
      className={classNames(
        "alert alert-warning alert-dismissible fade show",
        hideAlert && "hide"
      )}
    >
      {children}
      {/* <Button onClick={handleClose}>X</Button> */}
    </div>
  );
};

export default Alert;
