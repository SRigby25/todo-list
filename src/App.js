import { useState} from "react";
import Todoitem from "./components/Todoitem";

function App() {
  let [todos, seTodos] = useState([
    "xx",
    "yy",
    "zz",
  ]);
  return (
    <div>
    <h1> my todo list </h1>
    {todos.map((todo, index) => (
      <Todoitem todo={todo} key={index} />
    ))}
    </div>
  );
}

export default App;
