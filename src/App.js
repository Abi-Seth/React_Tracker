import './App.css';
import { useState, useEffect } from "react" ;
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

// class based
// import React from 'react';

function App() {
	const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();

			setTasks(tasksFromServer)
		}

		getTasks()
	}, [])

	//fetch tasks from server
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json()

		return data
	}	
	
	const fetchSingleTasks = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`, { method: 'GET'});
		const data = await res.json()

		return data
	}

	//add task
	const addTask = async (task) => {
		// const id = Math.floor(Math.random() * 10000) + 1;

		// const newTask = { id, ...task}
		// setTasks([...tasks, newTask])
	
		const res = await fetch('http://localhost:5000/tasks', { method: 'POST', headers: {
			'Content-type': 'application/json'
		}, body: JSON.stringify(task)})

		const data = await res.json()
		setTasks([...tasks, data])
	}

	//delete task
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`,{ method: 'DELETE' })

		setTasks(tasks.filter((task) => task.id !== id))
	}

	//toggle reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchSingleTasks(id);

		const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(updTask)
		})

		const data = await res.json()

		setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
		// setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
	}

	return (
		<div className="container">
			<Header title="React Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
			{showAddTask && <AddTask onAdd={addTask} />}			
			{ tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks available' }
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
