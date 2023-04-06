import { ReactNode } from "react";
import classNames from "classnames";

interface IProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: IProps) => {
  return (
    <div
      role="alert"
      className={classNames("alert alert-warning alert-dismissible fade show")}
    >
      {children}
      <button
        onClick={onClose}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
