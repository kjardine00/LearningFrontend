import "./App.css";
import TodoTitle from "./components/TodoTitle.jsx";
import Todo from "./components/Todo.jsx";
import Popup from "./components/Popup.jsx";
import Counter from "./components/Counter.jsx";
import { useState, useEffect } from "react";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  function togglePopup() {
    console.log("parent delete notified");
    setPopupOpen((prevPopupOpen) => !prevPopupOpen);
  }

  function closePopup() {
    setPopupOpen(false);
  }

  useEffect(() => {
    console.log("component mounted");
  }, []);

  return (
    <>
      <TodoTitle />
      <div>
        <input
          type="text"
          placeholder="Task"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setPopupOpen(true)}>Add Task</button>
      </div>
      <Todo
        togglePopup={togglePopup}
        task="Learn React"
        desc="Follow the tutorial on youtube"
      />
      <Todo
        togglePopup={togglePopup}
        task="Learn Next.js"
        desc="Follow the tutorial on youtube"
      />
      <Todo
        togglePopup={togglePopup}
        task="Get the Job"
        desc="apply to jobs everyday"
      />
      <Todo
        togglePopup={togglePopup}
        task="Make money"
        desc="relax and enjoy life"
      />
      {popupOpen ? (
        <Popup
          closePopup={closePopup}
          prompt="Are you really really sure????"
        />
      ) : null}
    </>
  );
}

export default App;
