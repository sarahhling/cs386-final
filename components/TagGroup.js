import React from "react";
import Tag from "./tag";
import { getInfo } from "../scripts/processNewsRatingsJSON";

function TagGroup({ source }) {
  var tags = getInfo(source);
  var index = 0;
  return (
    <div>
      {tags.length > 0 && tags.map((tag) => <Tag type={tag} key={index} />)}
    </div>
  );
  index += 1;
}

export default TagGroup;
