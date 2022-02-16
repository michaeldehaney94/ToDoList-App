import React, { Fragment, useState } from 'react';
//Fragement allows you to group multiple elements without adding a extra node to the DOM

const InputTodo = () => {
    //description will get and pass the value into the state 'setDescription'
    const [description, setDescription] = useState("");

    //function will pass the data/value in a http server to the backend
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            //console.log(response);
            //browser will refresh and show changes
            window.location = "/";
        } catch (e) {
            console.error(e.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Todo Task App</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                placeholder="Enter new task..."/>

                <button className="btn btn-success" title='addBtn'>Add</button>
            </form>
        </Fragment>
    );
}

export default InputTodo;