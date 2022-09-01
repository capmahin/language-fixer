import { useState } from "react";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions/index";

function ToDoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);

  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <div class="hero-content text-center min-h-screen ">
      <div class="max-w-md">
        <br></br>
        <h1 className="text-center text-4xl  text-yellow-400">TODO-List</h1>
        <Form
          editFormVisibility={editFormVisibility}
          editTodo={editTodo}
          cancelUpdate={cancelUpdate}
        />
        <Todos
          handleEditClick={handleEditClick}
          editFormVisibility={editFormVisibility}
        />
        {todos.length > 1 && (
          <button
            className="btn btn-info btn-md delete-all"
            onClick={() => dispatch(deleteAll())}
          >
            DELETE ALL
          </button>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
