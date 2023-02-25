import React from "react"
import { useSelector } from "react-redux"
import Task from "../Task/task"
import classes from "./style.module.css"
export default function ListTask() {
const Tasks = useSelector((el) => el.todos) // ma constante rahi f store.js
	return (
	<div className={classes.container}>
	{Tasks.map((el) => ( // el howa li yparcouri
	<Task key={el.id} {...el} /> //...el =el.title/el.desc /el.isDone 
			))}

		</div>
	)
}