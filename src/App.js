import React, { useState, useEffect } from 'react';
import './App.css'
export default function App() {
  const [newToDo, setNewToDo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [EditToDo, setEditToDo] = useState(false);
  const [editToDoValue, setEditToDoValue] = useState('');
  const [editToDoId, setEditToDoId] = useState('');


  const setNewToDoList = () => {
    if (newToDo !== '') {
      setTodoList([...todoList, { todo: newToDo, todoId: Date.now() }]);
      setNewToDo('');
    } else {
      return
    }
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

        <div className='main-container'>
          <div className='title'> <h1 >Edit TO DO</h1></div>
          {/* Edit part Start */}
          <div className="add-wrapper">

            <input
              type="text"
              name="focus"
              className="add-box"
              placeholder="Edit To Do"
              value={editToDoValue}
              data-testid="edit-input"
              onChange={(e) => setEditToDoValue(e.target.value)} />
            <button onClick={updateToDo} data-testid="update-button" className='update-button'> Update </button>&nbsp;
            <button onClick={cancleUpdate} data-testid="cancle-button" className='cancle-button'> Cancle </button>

          </div>

          {/* Edit part End*/}
        </div>
      ) : (
        <div className='main-container'>
          <div className='title'> <h1>Add TO DO</h1></div>
          {/* Add part Start */}
          <div className="add-wrapper">

            <input
              type="text"
              name="focus"
              className="add-box"
              placeholder="Create New To Do"
              data-testid="add-input"
              value={newToDo}
              onChange={(e) => setNewToDo(e.target.value)} />
            <button className="add-icon" onClick={setNewToDoList} data-testid="add-button" ></button>

          </div>
          <div >
          </div>
          &nbsp; &nbsp;
          {/* Add part End */}
        </div>
      )}
      <ul data-testid="todo-item-list" className='todo-item-list'>
        {console.log("oooo>>", todoList)}
        {todoList.map((list, index) => {
          return (
            <li key={list.todoId} className='todolist'>
              {list.todo}&nbsp; &nbsp;
              <button data-testid="edit-button" className='edit-button' onClick={() => todoEdit(list.todoId)}>Edit</button>&nbsp;
              &nbsp;
              <button data-testid="delete-button" className='delete-button' onClick={() => deleteTodo(list.todoId)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
