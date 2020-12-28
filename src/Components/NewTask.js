import React, { useState } from 'react';
import '../index.css';

function NewTask(props) {
    const [taskName, setTaskName] = useState('');

    function updateTaskName(e) {
        setTaskName(e.target.value);
    }
    
    function handleClick(e) {
        const args = {
            id: Math.floor(Math.random() * 100) + 1,
            name: taskName,
            isDone: false
        }

        //const { taskAdded } = props;

        // Bắn event taskAdded với tham số là arg ra thằng Parent Component
        //taskAdded(args);
        props.taskAdded(args);
        setTaskName('');
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div>
            <h3>Add Task</h3>
            <div className='fg'>
                <input type='text' onChange={updateTaskName} value={taskName} onKeyPress={handleEnter} />
                <button type='button' onClick={handleClick}>Add</button>
            </div>
        </div>
    );
}

export default NewTask;
