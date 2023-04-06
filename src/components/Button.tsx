// rafce NTS: shortcut
import { MouseEvent } from "react";
import classNames from "classnames";

interface IProps {
  buttonType?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link"; // NTS: to restrict input to valid options only
  children?: string; // NTS: to make it optional
  onClick: (event: MouseEvent) => void;
}

const Button = ({
  buttonType = "primary", // NTS: to set default value if not provided
  children = "Click Me",
  onClick,
}: IProps) => {
  return (
    <>
      <button
        aria-label="Close"
        data-dismiss="alert"
        type="button"
        onClick={(event: MouseEvent) => {
          onClick(event);
        }}
        className={classNames(`close m-2 btn btn-${buttonType}`)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
