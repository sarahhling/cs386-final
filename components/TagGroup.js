import React from "react";
import Tag from "./tag";
import { getInfo } from "../scripts/processNewsRatingsJSON";

function TagGroup(props) {
  const { source, opinion } = props;
  var tags = getInfo(source, opinion);
  return (
    <div className="d-inline">
      {tags.length > 0 &&
        tags.map((tag, index) => <Tag type={tag} key={index} />)}
    </div>
  );
}

export default TagGroup;
