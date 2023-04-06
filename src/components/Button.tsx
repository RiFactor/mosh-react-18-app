// rafce NTS: shortcut

import { MouseEvent } from "react";
import classNames from "classnames";
import Alert from "./Alert";
import { useState } from "react";

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
  //   hide: boolean;
  onClick: (event: MouseEvent) => void;
}

const Button = ({
  buttonType = "primary", // NTS: to set default value if not provided
  children = "Click Me",
  onClick,
}: //   hide = true,
IProps) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            onClick={() => setShowAlert(false)}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Alert>
      )}

      <button
        aria-label="Close"
        data-dismiss="alert"
        type="button"
        onClick={(event: MouseEvent) => {
          onClick(event);
          setShowAlert(true);
        }}
        className={classNames(
          `close m-2 btn btn-${buttonType}`
          //   , hide && "hide"
        )}
      >
        <span aria-hidden="true">&times;</span>
        {children}
      </button>
    </>
  );
};

export default Button;
