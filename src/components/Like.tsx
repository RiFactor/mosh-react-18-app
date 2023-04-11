import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

interface IProps {
  onClick: () => boolean;
}

const Like = ({ onClick }: IProps) => {
  const [isLiked, setisLiked] = useState(false);

  return (
    <div onClick={onClick}>
      Click me
      {isLiked ? <AiFillHeart /> : <AiOutlineHeart />};
    </div>
  );
};

export default Like;
