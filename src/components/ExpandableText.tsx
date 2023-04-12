import { useState } from "react";

const ExpandableText = () => {
  const [charLimit, setCharLimit] = useState(10); // QUESTION, can the type change, e.g. become a string, is this where TS then stops type changes
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState("Expandable Text Over a character limit");

  const handleShowText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      {showText ? text : text.substring(0, 10) + "..."}
      <button style={{ margin: "0.125rem" }} onClick={handleShowText}>
        {showText ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
