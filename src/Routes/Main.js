import React from 'react';
import NoteCard from '../components/NoteCard.js';
import { Link } from 'react-router-dom';

function Main(props) {
  return (
    <div className="Main">
    
<div className="MainSection">
<h1>Main</h1>
          {props.store.notes.map((note)=>{
            console.log("in loop",note.id);
            return( 
            <div className="NoteCard">
            <Link to= {`/notes/${note.id}`}>
              {note.name}
            </Link>
            <p>{note.modified}</p>
            <button>Delete Note</button>
          </div>
            )
          })}
        </div>
      </div>
  );
}

export default Main;