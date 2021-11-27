import './App.css';
import { useState } from "react" ;
import Header from './components/Header';
import Tasks from './components/Tasks';

// class based
// import React from 'react';

function App() {
	const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:00pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 3:00pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food shoping',
            day: 'Feb 7th at 1:00pm',
            reminder: false
        }
    ])

	return (
		<div className="container">
			<Header title="React Tracker" />
			<Tasks tasks={tasks} />
		</div>
	);
}

// class based
// class App extends React.Component {
// 	render() {
// 		return <h1>Hello buddy.</h1>
// 	}
// }

export default App;
