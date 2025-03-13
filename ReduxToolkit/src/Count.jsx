import { useDispatch, useSelector } from "react-redux";
import { increment } from "./CountSlice";

function Count() {
  const Count = useSelector((state) => state.count.value);
  console.log(Count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>Count:{Count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
}

export default Count;
