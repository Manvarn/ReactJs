import { React, memo } from "react";

function ChildA(Learning, count) {
  console.log("ChildA Component");
  return <></>;
}

// export default ChildA; //useMemo se wrap nahi kiya
export default memo(ChildA); //useMemo se wrap kar diya
