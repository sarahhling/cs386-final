import React from "react";
import Tag from "./tag";
import { getInfo } from "../utils/processNewsRatingsJSON";

function TagGroup({ source }) {
  var tags = getInfo(source);
  var index = 0;
  return (
    <div>{tags.length > 0 && tags.map((tag, index) => <Tag type={tag} />)}</div>
  );
  index += 1;
}

export default TagGroup;
