import React from "react";
import Grandchild from "./grandchild";

const Child = ({ message, sendDataToParent }) => {
  return (
    <div className="card p-3 bg-info text-white">
      <div className="card-body">
        <h4 className="card-title">Child Component</h4>
        <Grandchild message={message} sendDataToParent={sendDataToParent} />
      </div>
    </div>
  );
};

export default Child;
