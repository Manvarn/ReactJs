import React from "react";

const Grandchild = ({ message, sendDataToParent }) => {
  const replyMessage = "Hello Parent, message received!";

  return (
    <div className="card p-3 bg-light">
      <div className="card-body">
        <h5 className="card-title">Grandchild Component</h5>
        <p><strong>Message from Parent:</strong> {message}</p>
        <button className="btn btn-primary" onClick={() => sendDataToParent(replyMessage)}>
          Send Data to Parent
        </button>
      </div>
    </div>
  );
};

export default Grandchild;
