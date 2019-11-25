import React from 'react';
import DataContext from '../DataContext';
import { Link } from 'react-router-dom';
import Data from '../Data';

function Folder(props) {
  
  return (
    
    <div className="Main">
      {/* <DataContext.Consumer> */}
    
       
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

        {/* </DataContext.Consumer>     */}
      </div>
  );
}



export default Folder;