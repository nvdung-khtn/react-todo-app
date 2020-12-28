import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import Components
import NewTask from './Components/NewTask'
import SearchBar from './Components/SearchBar'
import Task from './Components/Task'


//Nơi định nghĩa Component lớn nhất của Project (App Component)
// function App() {
//     return (
//         <div className='App'>
//             <header className='App-header'>
//                 <img src={logo} className='App-logo' alt='logo' />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

function App() {
    return (
        <div className='container'>
            <SearchBar />
            <Task />
            <NewTask />
            <button>show data</button>
        </div>
    );
}

export default App;
