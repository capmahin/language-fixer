import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removeTodo, handleCheckbox } from "../redux/todoapp/actions";

export const Todos = ({ handleEditClick, editFormVisibility }) => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.operationsReducer);
    return todos.map((todo) => (
        <div
            key={todo.id}
            className="todo-box text-white text-2xl flex justify-center p-2"
        >
            <div className="content flex justify-center px-2 ">
                {editFormVisibility === false && (
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(handleCheckbox(todo.id))}
                    ></input>
                )}
                <p
                    style={
                        todo.completed === true
                            ? { textDecoration: "line-through" }
                            : { textDecoration: "none" }
                    }
                >
                    {todo.todo}
                </p>
            </div>
            <div className="actions-box px-2">
                {editFormVisibility === false && (
                    <>
                        <span onClick={() => handleEditClick(todo)}>
                            <Icon icon={edit2} />
                        </span>
                        <span onClick={() => dispatch(removeTodo(todo.id))}>
                            <Icon icon={trash} />
                        </span>
                    </>
                )}
            </div>
        </div>
    ));
};
