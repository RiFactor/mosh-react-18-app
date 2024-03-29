import { useState } from "react";

const ExpandableText = () => {
  const [charLimit, setCharLimit] = useState(10); // TODO, try it out: can the type change, e.g. become a string, TS will stop type change
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState("Expandable Text Over a character limit");

  const [expandableText, setExpandableText] = useState({
    // ANSWERED -- is it preferred to store these related items in one state? (would instead use redux or use Query)
    charLimit: 10,
    showText: false,
    text: "I bought dog flea treatment and later relaxed with a cup of tea then realised I'd left my shoehorn in the car.",
  });

  const handleShowText = () => {
    setShowText(!showText);
  };

  const handleExpandableText = () => {
    setExpandableText({
      ...expandableText,
      showText: !expandableText.showText,
    });
  };

  return (
    <div>
      {showText ? text : text.substring(0, 10) + "..."}
      <button style={{ margin: "0.125rem" }} onClick={handleShowText}>
        {showText ? "Less" : "More"}
      </button>

      {/* Alternate version in one state */}
      <p>
        {expandableText.showText
          ? expandableText.text
          : expandableText.text.substring(0, expandableText.charLimit) + "..."}
        <button style={{ margin: "0.125rem" }} onClick={handleExpandableText}>
          {expandableText.showText ? "Less" : "More"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;
