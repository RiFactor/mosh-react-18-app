import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Alert = ({ children }: IProps) => {
  return <div>{children}</div>;
};

export default Alert;
