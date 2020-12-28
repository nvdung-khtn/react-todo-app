import React from 'react';
import '../index.css';
import TaskItem from './TaskItem'

function Task(props) {
    return (
        <div>
            <h3>Todo</h3>
            <ul>
                <TaskItem />
            </ul>
        </div>
    );
}

export default Task;

