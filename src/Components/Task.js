import React from 'react';
import '../index.css';
import TaskItem from './TaskItem'

function Task(props) {
    const {list} = props;

    function notifyItemDeleted(id) {
        props.itemDeleted(id)
    }

    return (
        <div>
            <h3>Todo</h3>
            <ul>
               {list.map(item => (
                    <TaskItem key={item.id.toString()} item={item} itemDeleted={notifyItemDeleted} />
               ))}
            </ul>
        </div>
    );
}

export default Task;

