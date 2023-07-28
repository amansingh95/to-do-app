import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [newToDo, setNewToDo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [EditToDo, setEditToDo] = useState(false);
  const [editToDoValue, setEditToDoValue] = useState('');
  const [editToDoId, setEditToDoId] = useState('');

  const setNewToDoList = () => {
    setTodoList([...todoList, { todo: newToDo, todoId: Date.now() }]);
    setNewToDo('');
  };
  const todoEdit = (todoId) => {
    setEditToDo(true);
    todoList.map((ele) => {
      if (ele.todoId === todoId) {
        setEditToDoValue(ele.todo);
        setEditToDoId(ele.todoId);
      }
    });
  };

  const updateToDo = () => {
    const newToDoList = todoList.map((ele) => {
      if (ele.todoId === editToDoId) {
        return { ...ele, todo: editToDoValue };
      }
      return ele;
    });
    setTodoList(newToDoList);
    setEditToDoValue('');
  };
  const cancleUpdate = () => {
    todoList.map((ele) => {
      if (ele.todoId === editToDoId) {
        setEditToDoValue(ele.todo);
      }
    });
  };
  const deleteTodo = (deleteId) => {
    setTodoList((cc) => cc.filter((element) => element.todoId !== deleteId));
  };
  return (
    <div>
      {EditToDo ? (
        <div>
          <h1>Edit TO DO</h1>
          {/* Edit part Start */}
          <p>Edit TO DO</p>
          <input
            placeholder="Create New To Do"
            value={editToDoValue}
            onChange={(e) => setEditToDoValue(e.target.value)}
          />
          &nbsp;
          <button onClick={updateToDo}> Update </button>&nbsp;
          <button onClick={cancleUpdate}> Cancle </button>
          {/* Edit part End*/}
        </div>
      ) : (
        <div>
          <h1>Add TO DO</h1>
          {/* Add part Start */}
          <p>Add TO DO</p>
          <input
            placeholder="Create New To Do"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
          />
          &nbsp; &nbsp;
          <button onClick={setNewToDoList}> ADD </button>
          {/* Add part End */}
        </div>
      )}
      <ul style={{ 'list-style-type': 'none' }}>
        {todoList.map((list, index) => {
          return (
            <li key={list.todoId}>
              {list.todo}&nbsp; &nbsp;
              <button onClick={() => todoEdit(list.todoId)}>Edit</button>&nbsp;
              &nbsp;
              <button onClick={() => deleteTodo(list.todoId)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
