import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Header = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");

  const addTodo = () => {
    console.log(task);
    const newTodo = {
      id: uuidv4(),
      text: task,
      completed: false,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    setTask("");
  };
  return (
    <div>
      <h1 className="text-center text-danger">Todo App</h1>
      <InputGroup className="mb-3 w-50 d-flex mx-auto ">
        <Form.Control
          className="rounded-3"
          placeholder="New  Todo List ..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          className="btn btn-danger rounded-3"
          id="basic-addon2"
          disabled={!task.trim()}
          onClick={addTodo}
        >
          Add List
        </Button>
      </InputGroup>
    </div>
  );
};

export default Header;
