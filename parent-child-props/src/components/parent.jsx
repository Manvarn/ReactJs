import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [receivedMessage, setReceivedMessage] = useState("");

  // Function to receive data from Grandchild
  const handleDataFromGrandchild = (data) => {
    setReceivedMessage(data);
  };

  const message = "Hello from Parent!"

  return (
    <div className="card p-3 bg-warning text-dark">
      <div className="card-body">
        <h3 className="card-title">Parent Component</h3>
        <p><strong>Message from Grandchild:</strong> {receivedMessage}</p>
        <Child message={message} sendDataToParent={handleDataFromGrandchild} />
      </div>
    </div>
  );
};

export default Parent;
