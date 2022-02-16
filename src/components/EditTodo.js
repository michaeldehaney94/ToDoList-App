import React, { Fragment, useState } from 'react';

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);

    //edit onclick description button function
    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.id}`, {
                method: 'PUT',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            })
            //reload the page to see change on page
            window.location = "/";

        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <Fragment>
            <button type="button" class="btn btn-primary" 
            data-toggle="modal" 
            data-target={`#id${todo.id}`}> 
            Edit
            </button>

            {/* the todo.id template string, for 'data-target' above and 'id' element, and will target 
            the specific record in the list with corresponding id. */}
            
            {/* the onclick will set the input back to it's original value if editing process is cancelled without changes */}
            <div class="modal" id={`id${todo.id}`} onClick={() => setDescription(todo.description)}>
                <div class="modal-dialog">
                    <div class="modal-content">

                        {/* the onclick will set the input back to it's original value if editing process is cancelled without changes */}
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Task</h4>
                            <button type="button" class="close" data-dismiss="modal"
                            onClick={() => setDescription(todo.description)}>&times;
                            </button>
                        </div>

                        <div class="modal-body">
                            {/* the task selected within the list to be edited, it's value will pass into the
                            input field to be changed/updated inside the modal*/}
                            <input type="text" value={description} className="form-control" title="editBtn"
                                onChange={e => setDescription(e.target.value)} />
                        </div>

                        <div class="modal-footer">
                            {/* Save button */}
                            {/* the onClick will submit the data to the server to update record */}
                            <button 
                            type="button" 
                            class="btn btn-warning" 
                            data-dismiss="modal"
                            onClick={e => updateDescription(e)}>
                                Save
                            </button>
                            {/* Close button */}
                            {/* the onclick will set the input back to it's original value if editing process is cancelled without changes */}
                            <button type="button" class="btn btn-danger" data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EditTodo;