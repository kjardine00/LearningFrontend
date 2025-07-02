import "./App.css";
import TodoTitle from "./components/TodoTitle.jsx";
import Todo from "./components/Todo.jsx";
import Popup from "./components/Popup.jsx";
import Counter from "./components/Counter.jsx";
import { useState } from "react";

function App() {

  return <Counter />;

  const [task, setTask] = useState("")

  const [popupOpen, setPopupOpen] = useState(false)

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
      <Todo task="Learn React" desc="Follow the tutorial on youtube" />
      <Todo task="Learn Next.js" desc="Follow the tutorial on youtube" />
      <Todo task="Get the Job" desc="apply to jobs everyday" />
      <Todo task="Make money" desc="relax and enjoy life" />
      {popupOpen ? <Popup prompt="Are you really really sure????" /> : null}
    </>
  );
}

export default App;
