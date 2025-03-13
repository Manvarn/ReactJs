import Parent from "./Parent";

function GrandParent() {
  const data = { fullName: "Nikhil" };

  return (
    <>
      <Parent GrandParent={data.fullName} />
    </>
  );
}

export default GrandParent;
