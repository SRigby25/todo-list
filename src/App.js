import { useState} from "react";
import Todoitem from "./components/TodoItem/Todoitem";
import TodoForm from "./components/TodoForm/TodoFrom";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([
    { text: "learn about react", isCompleted: false },
    { text: "walk dog", isCompleted: false },
    { text: "feed cat", isCompleted: false },
  ]);

  let addTodo = (text) => {
    let newTodos = [...todos, { text: text, isCompleted: false}];
    setTodos(newTodos);
  };

  let completeTodo = (index) => {
    let newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  let removeTodo = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
    <h1> my todo list </h1>
    {todos.map((todo, index) => (
      <Todoitem 
      todo={todo} 
      key={index}
      index={index}
      completeTodo={completeTodo}
      removeTodo={removeTodo} />
    ))}
    <TodoForm addTodo={addTodo} />
    </div></div>
    
  );
}

export default App;