import React from 'react';
import '../index.css';

function TaskItem(props) {
    const {item} = props;
    let done = '';

    if(item.isDone) {
        done = 'done';
    }

    function deleteItem() {
        props.itemDeleted(item.id);
    }

    return (
        <li className={done}>
            {item.name}
            {done ?
                "" : <button onClick={deleteItem}>Delete</button>
            }
        </li>
    );
}
export default TaskItem;

