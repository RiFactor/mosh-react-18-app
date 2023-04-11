import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface IProps {
  onClick: () => void;
}

const Like = ({ onClick }: IProps) => {
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
        <AiFillHeart color="#ff6b81" />
      ) : (
        <AiOutlineHeart color="#ff6b81" />
      )}
      {/* QUESTION -- is there a way to use the colour once (can make the colour a defined var, but also want to just set it once) */}
    </div>
  );
};

export default Like;
