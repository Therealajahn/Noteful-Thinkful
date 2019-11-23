import React from 'react';
import { Link } from 'react-router-dom';

function Folder(props) {
  
  return (
    <div className="Main">
     
       
     <div className="MainSection">
          <h1>Folder</h1>
          {props.store.notes.filter((note) => {
            if(note.folderId === props.currentFolder){
            return true;
            }else{ 
            return false;
            }
          }).map((note)=>{
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

export default Folder;