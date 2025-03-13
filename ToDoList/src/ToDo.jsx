// import "./Todo.css";
// import { useState } from "react";
// import { CiEdit } from "react-icons/ci";
// import { FaTrash } from "react-icons/fa";

// const ToDo = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [task, setTask] = useState([]);
//   const [editing, setEditing] = useState(null); // Tracks the task being edited

//   const handleInputChange = (value) => {
//     setInputValue(value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // event;

//     if (!inputValue) return;

//     // If we're editing a task, we want to update that task, otherwise, we add a new task
//     if (editing !== null) {
//       setTask((prev) =>
//         prev.map((curTask) =>
//           curTask.id === editing ? { ...curTask, text: inputValue } : curTask
//         )
//       );
//       setEditing(null); // Reset editing after the task is updated
//     } else {
//       const newTask = {
//         id: Date.now(),
//         text: inputValue,
//       };
//       setTask((prev) => [...prev, newTask]);
//     }

//     setInputValue(""); // Clear the input field after adding/updating
//   };

//   const editPost = (taskToEdit) => {
//     setInputValue(taskToEdit.text); // Fill input with the task text
//     setEditing(taskToEdit.id); // Set the task's ID as the 'editing' state
//   };

//   const deleteTask = (id) => {
//     const updatedTasks = task.filter((curTask) => {
//       // console.log(curTask);
//       if (curTask.id !== id) {
//         return curTask;
//       }
//     });
//     setTask(updatedTasks);
//   };

//   return (
//     <section className="todo-cotainer">
//       <header>
//         <h1>Todo List</h1>
//       </header>
//       <section className="form">
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <input
//               type="text"
//               className="todo-input"
//               autoComplete="on"
//               value={inputValue}
//               onChange={(event) => handleInputChange(event.target.value)}
//             />
//           </div>
//           <div className="todo-div">
//             <button
//               type="submit"
//               className={`todo-btn ${
//                 editing !== null && inputValue !== ""
//                   ? "update-task"
//                   : "add-task"
//               }`}
//             >
//               {editing !== null && inputValue.trim() !== ""
//                 ? "Update-Task"
//                 : "Add-Task"}
//             </button>
//           </div>
//         </form>
//       </section>
//       <section className="myUnOrdList">
//         <ul>
//           {task.map((curTask) => (
//             <li key={curTask.id} className="todo-item">
//               <span>{curTask.text}</span>
//               <button className="chech-btn" onClick={() => editPost(curTask)}>
//                 <CiEdit />
//               </button>
//               <button
//                 className="delete-btn"
//                 onClick={() => deleteTask(curTask.id)}
//               >
//                 <FaTrash />
//               </button>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </section>
//   );
// };

// export default ToDo;

// ...prev uses the spread operator to create a shallow copy of the existing tasks array. This ensures that the new state will include all the existing tasks.
// ...prev ni under jo  ... na hoy khali prev j khali add hoy to string pass karse array pass nahi kare
// onClick={() => deleteTask(index)} means that when the button is clicked, the deleteTask function will be called with the index of the task to be deleted.
//  key ni under ek unique id apvi pade
// .filter() is a built-in JavaScript method that creates a new array containing only the elements from the original array that pass a specific test.
// curTask.id !== id checks if the id of the current task (curTask.id) is not equal to the value of id
//jo array ma same nam hase to return kari ne setInputValue mathi input text khali thay jase
// The handleFormSubmit function is called when the form is submitted. It checks if the inputValue is empty and returns if it is. If the inputValue is not empty, it creates a new task object with a unique id and the text from the input field. The new task is added to the tasks array using the setTask function, and the inputValue is cleared.
// code evaluation
// autoComplete="on" // autocomplete off kari ne input field ma jo value hase to aavi jase

// import "./Todo.css";
// import { useState, useEffect } from "react";
// import { CiEdit } from "react-icons/ci";
// import { FaTrash } from "react-icons/fa";

// const ToDo = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [task, setTask] = useState([]);
//   const [editing, setEditing] = useState(null); // Tracks the task being edited
//   const apiUrl = "https://67b6edbb2bddacfb270cdfe9.mockapi.io/api/todo";

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => setTask(data))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleInputChange = (value) => {
//     setInputValue(value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     if (!inputValue) return;

//     // If we're editing a task, we want to update that task, otherwise, we add a new task
//     if (editing !== null) {
//       setTask((prev) =>
//         prev.map((curTask) =>
//           curTask.id === editing ? { ...curTask, text: inputValue } : curTask
//         )
//       );
//       setEditing(null); // Reset editing after the task is updated
//     } else {
//       createTodo(inputValue);
//     }

//     setInputValue(""); // Clear the input field after adding/updating
//   };

//   const createTodo = (inputValue) => {
//     fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ myId: Date.now(), text: inputValue }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to add todo");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Todo added successfully:", data);

//         // Update local state to include the newly added task
//         setTask((prev) => [...prev, data]);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const editPost = (taskToEdit) => {
//     setInputValue(taskToEdit.text); // Fill input with the task text
//     setEditing(taskToEdit.id); // Set the task's ID as the 'editing' state
//   };

//   const deleteTask = (id) => {
//     const updatedTasks = task.filter((curTask) => curTask.id !== id);
//     setTask(updatedTasks);
//   };

//   return (
//     <section className="todo-cotainer">
//       <header>
//         <h1>Todo List</h1>
//       </header>
//       <section className="form">
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <input
//               type="text"
//               className="todo-input"
//               autoComplete="on"
//               value={inputValue}
//               onChange={(event) => handleInputChange(event.target.value)}
//             />
//           </div>
//           <div className="todo-div">
//             <button
//               type="submit"
//               className={`todo-btn ${
//                 editing !== null && inputValue !== ""
//                   ? "update-task"
//                   : "add-task"
//               }`}
//             >
//               {editing !== null && inputValue.trim() !== ""
//                 ? "Update Task"
//                 : "Add Task"}
//             </button>
//           </div>
//         </form>
//       </section>
//       <section className="myUnOrdList">
//         <ul>
//           {task.map((curTask) => (
//             <li key={curTask.id} className="todo-item">
//               <span>{curTask.text}</span>
//               <button className="chech-btn" onClick={() => editPost(curTask)}>
//                 <CiEdit />
//               </button>
//               <button
//                 className="delete-btn"
//                 onClick={() => deleteTask(curTask.id)}
//               >
//                 <FaTrash />
//               </button>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </section>
//   );
// };

// export default ToDo;

import "./Todo.css";
import { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [task, setTask] = useState([]);
  const [editing, setEditing] = useState(null);
  const apiUrl = "https://67b6edbb2bddacfb270cdfe9.mockapi.io/api/todo";

  // GET Method
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue || !name) return;

    // If we're editing a task, we want to update that task, otherwise, we add a new task
    if (editing !== null) {
      setTask((prev) =>
        prev.map((curTask) =>
          curTask.id === editing
            ? { ...curTask, text: inputValue, name: name }
            : curTask
        )
      );
      setEditing(null); // Reset editing after the task is updated
      updateTodo();
    } else {
      createTodo();
    }

    setInputValue(""); // Clear the input field after adding/updating
    setName(""); // Clear the name field after adding/updating
  };

  // POST Method
  const createTodo = () => {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myId: Date.now(),
        text: inputValue,
        name: name,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add todo");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Todo added successfully:", data);

        setTask((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // PUT Method
  const updateTodo = () => {
    fetch(`${apiUrl}/${editing}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputValue,
        name: name,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update todo");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Todo updated successfully:", data);

        // Update local state to reflect the task update
        setTask((prev) =>
          prev.map((curTask) =>
            curTask.id === editing
              ? { ...curTask, text: inputValue, name: name }
              : curTask
          )
        );
        setEditing(null); // Reset editing after the task is updated
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const editPost = (taskToEdit) => {
    setInputValue(taskToEdit.text); // Fill input with the task text
    setName(taskToEdit.name); // Fill input with the task name
    setEditing(taskToEdit.id); // Set the task's ID as the 'editing' state
  };

  // DELETE Method
  const deleteTask = async (id) => {
    try {
      const response = await fetch(
        `https://67b6edbb2bddacfb270cdfe9.mockapi.io/api/todo/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setTask((prev) => prev.filter((task) => task.id !== id));
        console.log("Task deleted successfully");
      } else {
        console.log("Failed to delete task");
      }
    } catch (error) {
      console.error("Error occurred while deleting task:", error.message);
    }
  };

  // const deleteTask = (id) => {
  //   const updatedTasks = task.filter((curTask) => curTask.id !== id);
  //   setTask(updatedTasks);
  // };

  return (
    <section className="todo-cotainer">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <h4>Text Field</h4>
            <input
              type="text"
              className="todo-input"
              autoComplete="on"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <h4>Name</h4>
            <input
              type="text"
              className="todo-input"
              autoComplete="on"
              value={name}
              onChange={(event) => handleNameChange(event.target.value)}
            />
          </div>
          <div className="todo-div">
            <button
              type="submit"
              className={`todo-btn ${
                editing !== null && inputValue !== "" && name !== ""
                  ? "update-task"
                  : "add-task"
              }`}
            >
              {editing !== null &&
              inputValue.trim() !== "" &&
              name.trim() !== ""
                ? "Update Task"
                : "Add Task"}
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => (
            <li key={curTask.id} className="todo-item">
              <span>{curTask.text}</span>
              <span> - {curTask.name}</span>
              <button className="chech-btn" onClick={() => editPost(curTask)}>
                <CiEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(curTask.id)}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ToDo;
