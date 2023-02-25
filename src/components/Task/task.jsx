import React, { useState } from "react"
import { useDispatch } from "react-redux"
import CheckboxDemo from "../chekbox/chekbox"
import DeleteTask from "../DeleteTask"
import { EditTask } from "../../app/store";
import "./style.css"
export default function Task({ id, title, description, isDone }) {
	const dispatch = useDispatch()
	const [isEditing, setIsEditing] = useState(false); // is editing ykone false de base
	const [editedTitle, setEditedTitle] = useState(title); // editedTitle value t3 title l9dime
	const [editedDesc, setEditedDesc] = useState(description);//editedDesc value t3 description l9dime
	const handleEdit = () => {
	  setIsEditing(true); // kan false de base ki tecliki yweli true 
	};
	const handleSave = () => { 
	  dispatch(EditTask({id, title: editedTitle, description: editedDesc}));
	  setIsEditing(false); // kan true ywli false
	};
	const handleCancel = () => {
	  setIsEditing(false); //yfermer automatiquemt fenetre li kona fiha ki nsaywviw
	  setEditedTitle(title); // ysauvgardi title jdide
	  setEditedDesc(description); // ysauvgardi description jdide 
	};
	return (
	  <div className="taskContainer">
		<div>
		  {isEditing ? ( // isEditing de base false
			<>
			  <textarea
				value={editedTitle} // editedTitle yweli hadek lidrto jdide
				onChange={(e) => setEditedTitle(e.target.value)}
			  />
			  <textarea
				value={editedDesc} // editedDesc yweli hadek lidrto jdide
				onChange={(e) => setEditedDesc(e.target.value)}
			  />
			  <button onClick={handleSave}>Save</button>
			  <button onClick={handleCancel}>Cancel</button>
			</>
		  ) : (
			<>
			  <p>{title}</p>
			  <p>{description}</p>
			  <CheckboxDemo isDone={isDone} id={id} />
			  <DeleteTask id={id} />
			  <button onClick={handleEdit}>Edit Task</button> {/*ki tecliki yweli true */}
			</>
		  )}
		</div>
	  </div>
	);
  }