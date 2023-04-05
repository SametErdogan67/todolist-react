import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const todoList = [
  {
    id: 1,
    text: "React ile ToDo List uygulaması",
    completed: false,
  },
  {
    id: new Date().getTime(),
    text: "uuid kullanımı",
    completed: false,
  },
];
const App = () => {
  const [todos, setTodos] = useState(todoList);
  return (
    <div className="body">
      <div className="container border border-primary p-5 rounded-5 m-5 mx-auto ">
        <Header setTodos={setTodos} todos={todos} />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
};

export default App;
