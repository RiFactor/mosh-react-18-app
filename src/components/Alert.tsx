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
    <div className={classNames("alert alert-primary", hideAlert && "hide")}>
      {children}
      <Button onClick={handleClose}>X</Button>
    </div>
  );
};

export default Alert;
