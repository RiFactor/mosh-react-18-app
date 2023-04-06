import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Alert = ({ children }: IProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
