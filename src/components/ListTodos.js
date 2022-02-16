import React, { Fragment, useEffect, useState } from 'react';
//component
import EditTodo from './EditTodo';

const ListTodos = () => {
    //the useState will use todos to pass the value and setTodos will hold the data to send it to the server
    const [todos, setTodos] = useState([]);

    //delete button function
    const deleteTodo = async(id) => {
        try {
            //delete fetch request
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE' //request method type
            });
            //using a filter to see updates real-time without reloading page
            setTodos(todos.filter(todo => todo.id !== id));
            //console.log(deleteTodo)
        } catch (e) {
            console.error(e.message)
        }
    }

    const getTodos = async() => {
        try {
            const response = await fetch('http://localhost:5000/todos');
            const jsonData = await response.json();
            console.log(jsonData);
            setTodos(jsonData);
            
        } catch (e) {
            console.error(e.message);
        }
    }
    //useEffect will make fetch request from API each time the component is rendered. 
    useEffect(() => {
        getTodos();
    }, []); //'[]' will allow only one request for array
    //console.log(todos);

    return (
        <Fragment>
            {/* <h1>List Todos</h1> */}
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */}
                    {/* .map() will iterate each element in from 'todo' DB table */}
                    {todos.map(todo => (
                        // key={todo.id} specifics the record to be edited or removed
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            {/* edit, delete buttons */}
                            <td>
                                <EditTodo todo={todo} /> 
                            </td>
                            <td>
                                <button className="btn btn-danger" title="deleteBtn" onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
        </Fragment>
    
    );
}

export default ListTodos;