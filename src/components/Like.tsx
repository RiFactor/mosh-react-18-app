import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface IProps {
  onClick: () => void;
  color?: string;
}

const Like = ({ onClick, color = "#ff6b81" }: IProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      onClick={() => {
        handleClick();
        onClick();
      }}
    >
      {isLiked ? (
        <AiFillHeart className="red-heart" />
      ) : (
        <AiOutlineHeart className="red-heart" />
      )}
      {/* ANSWERED -- no, not own component: is there a way to use the colour once (can make the colour a defined var, but also want to just set it once) */}
    </div>
  );
};

export default Like;
