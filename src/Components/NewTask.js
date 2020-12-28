import React from 'react';
import '../index.css';

function NewTask() {

    return (
        <div>
            <h3>Add Task</h3>
            <div className='fg'>
                <input type='text' />
                <button type='button'>Add</button>
            </div>
        </div>
    );
}

export default NewTask;
