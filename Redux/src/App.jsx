import { createStore } from "redux";

const initialState = { tasks: [] };

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};

const store = createStore(taskReducer);
console.log(store);

console.log("initial State : ", store.getState);

function App() {
  return (
    <>
      <h1>Redux</h1>
    </>
  );
}

export default App;
