import { ReactNode, useState } from "react";

interface IProps {
  children: string; // NTS: must be string to get length, not ReactNode
  charLimit?: number;
}

const ExpandableTextSolution = ({ children, charLimit = 25 }: IProps) => {
  const [showText, setShowText] = useState(false);

  if (children.length <= charLimit) return <p>{children}</p>;

  const text = showText ? children : children.substring(0, charLimit) + "...";
  return (
    <p>
      {text}
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableTextSolution;
