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
      {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};

export default Like;
