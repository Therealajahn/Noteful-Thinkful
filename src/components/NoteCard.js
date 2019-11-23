import React from 'react';
import { Link } from 'react-router-dom';

function NoteCard(props){
	return(
		<div className="NoteCard">
			<Link to= {`/${props.noteId}`}>
				{props.name}
			</Link>
			<p>{props.modified}</p>
			<button>Delete Note</button>
		</div>
	)
}



export default NoteCard;