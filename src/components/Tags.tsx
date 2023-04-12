import { useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState(["new", "old"]);

  const handleClick = () => {
    // Add element
    setTags([...tags, "refurb"]);

    // Remove element
    setTags((state) => {
      return state.filter((tag) => tag !== "new");
    });

    // Modify element
    // setTags(tags.map((tag) => (tag === "new" ? "like new" : tag))); // doing this (new -> like new) will modify from the saved state and ignore the filter method above
    setTags((state) => {
      console.log("tags", state, tags); // Pass anon fn and access current working 'state', for toggle or cancel re-render
      return state.map((tag) => (tag === "old" ? "like new" : tag));
    });
    console.log("tags", tags); // React waits for the entire code block before updating the tags (last render), so this will not be up-to-date when run
  };

  return (
    <>
      Tags
      <ul>
        {tags.map((tag) => (
          <li key={tag} onClick={() => handleClick()}>
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tags;
