import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/todoapp/actions";

export const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
    const dispatch = useDispatch();

    const [todoValue, setTodoValue] = useState("");

    const [editValue, setEditValue] = useState("");

    useEffect(() => {
        setEditValue(editTodo.todo);
    }, [editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id: time,
            todo: todoValue,
            completed: false,
        };
        setTodoValue("");
        dispatch(addTodo(todoObj));
    };

    const editSubmit = (e) => {
        e.preventDefault();
        let editedObj = {
            id: editTodo.id,
            todo: editValue,
            completed: false,
        };
        dispatch(handleEditSubmit(editedObj));
    };

    return (
        <div>
            {editFormVisibility === false ? (
                <form
                    className="form-group custom-form  text-white"
                    onSubmit={handleSubmit}
                >
                    <label className="text-white">Add your todo-items</label>
                    <div className="input-and-btn text-2xl flex py-3 ">
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={todoValue}
                            onChange={(e) => setTodoValue(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-secondary btn-md py-3"
                        >
                            ADD
                        </button>
                    </div>
                </form>
            ) : (
                <form
                    className="form-group custom-form text-black"
                    onSubmit={editSubmit}
                >
                    <label>Update your todo-items</label>
                    <div className="input-and-btn text-2xl">
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={editValue || ""}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-secondary btn-md"
                        >
                            UPDATE
                        </button>
                    </div>
                    <button
                        type="button"
                        className="btn btn-info btn-md "
                        onClick={cancelUpdate}
                    >
                        BACK
                    </button>
                </form>
            )}
        </div>
    );
};
