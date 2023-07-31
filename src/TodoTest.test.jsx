import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App  from "./App";



test('Adding a todo', () => {
  render(<App />);
  
  // Find the input field and type a new todo
  const inputElement = screen.getByTestId('add-input');
  fireEvent.change(inputElement, { target: { value: 'New todo item' } });
  
  // Find the 'Add' button and click it
  const addButton = screen.getByTestId('add-button');
  fireEvent.click(addButton);
  
  // Verify that the new todo is displayed on the screen
  const todoItem = screen.getByTestId('todo-item-list');
  expect(todoItem).toBeInTheDocument();
  });
  
  test('edit todo',()=>{
    render(<App />);
    // Add a todo
    const inputElement = screen.getByTestId('add-input');
    fireEvent.change(inputElement, { target: { value: 'New todo item' } });
    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);
    // Find the edit button
    const editButton = screen.getByTestId('edit-button');
    fireEvent.click(editButton);

    // find edit testbox
    const editInputElement = screen.getByTestId('edit-input');
    fireEvent.change(editInputElement,{target:{value:'updated todo'}})
    // find update button
    const updateButton = screen.getByTestId('update-button');
    fireEvent.click(updateButton);
    // check item has updated or not
    expect(screen.getByText('updated todo')).toBeInTheDocument();
  })
  test('Deleting a todo', () => {
    render(<App />);
    
    // Add a todo
    const inputElement = screen.getByTestId('add-input');
    fireEvent.change(inputElement, { target: { value: 'New todo item' } });
    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);
    
    // Find the delete button for the todo and click it
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);
    
    // Verify that the todo is no longer displayed on the screen
    const todoItem = screen.getByTestId('todo-item-list');
    const listItem = todoItem.querySelectorAll("li");
    expect(listItem.length).toBe(0);
    });
