// rafce shortcut

interface IProps {
  //   buttonType: "string"; // will be restricted to literally passing "string" as a value
  buttonType: string;
  children: string;
  onClick: () => void;
}

const Button = ({ buttonType, children, onClick }: IProps) => {
  return (
    <button onClick={onClick} className={`m-2 btn btn-${buttonType}`}>
      {children}
    </button>
  );
};

export default Button;
