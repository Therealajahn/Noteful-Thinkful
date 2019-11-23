import React from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';

function Folder(props) {
  
  return (
    
    <div className="Main">
     
    <Data.Consumer>   
     <div className="MainSection">
          <h1>Folder</h1>
          {Data.notes.filter((note) => {
            if(note.folderId === props.currentFolder){
            return true;
            }else{ 
            return false;
            }
          }).map((note)=>{
            return( 
            <div key={note.id} className="NoteCard">
            <Link to= {`/notes/${note.id}`}>
              {note.name}
            </Link>
            <p>{note.modified}</p>
            <button>Delete Note</button>
          </div>
            )
          })}
        </div>

        </Data.Consumer>  
      </div>
  );
}
Folder.contextType = Data;

export default Folder;