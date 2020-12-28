import React, { useState } from 'react';
import './App.css';
// Import Components
import NewTask from './Components/NewTask';
import SearchBar from './Components/SearchBar';
import Task from './Components/Task';

//Nơi định nghĩa Component lớn nhất của Project (App Component)

function App() {
    const [taskList, setTaskList] = useState([
        { id: 1, name: 'Pay Bills', isDone: true },
        { id: 2, name: '@vue/cli vs create-react-app', isDone: true },
        { id: 3, name: 'vue-router vs react-router', isDone: false },
        { id: 4, name: 'redux vs vuex', isDone: false },
    ]);

    const [shownList, setShowList] = useState(taskList); 

    function addTask(task) {
        const clone = taskList.slice();
        clone.push(task);
        setShowList(clone);
        setTaskList(clone);
    }

    function setTaskItemDone(id) {
        const clone = taskList.slice();
        clone.map(item => {
            if(item.id === id) {
                item.isDone = true;
            }

            return item;
        });
        setTaskList(clone);
    }

    const searchItem = (key) => {
        const lcKey = key.toLowerCase();
        
        const ret = taskList.filter(item => 
            item.name.toLowerCase().includes(lcKey)
        );
        setShowList(ret);
    }

    const showTaskList = _ => {
        alert(JSON.stringify(taskList));
    }

    return (
        <div className='container'>
            <SearchBar notifyTermChanged={searchItem}/>
            <Task list={shownList} itemDeleted={setTaskItemDone} />
            <NewTask taskAdded={addTask} />
            <button onClick={showTaskList}>show data</button>
        </div>
    );
}

export default App;
