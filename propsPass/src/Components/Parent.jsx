import Child from "./Child";

const Parent = ({ GrandParent }) => {
  return (
    <div>
      {/* Passing GrandParent to Child as Parent */}
      <Child Parent={GrandParent} />
    </div>
  );
};

export default Parent;
