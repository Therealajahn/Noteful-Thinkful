import React from 'react';
import { Link } from 'react-router-dom';


function Note(props) {
  return (
    <div className="Note">
      
       
      {/* <div className="FolderSection">
        
          {props.store.folders.map((folder)=>{
              return( 
                <div className="SideBar">
                  <Link to={`/folder/${folder.id}`}>
                    {folder.name}
                  </Link>
                </div>
              );
             
          })}
          <button>Add Folder</button>
        </div> */}

         <div className="Section">
         <h1>Note</h1>
          {/* {props.store.notes.map((note)=>{
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
        </div> */}
      </div>
  );
}

export default Note;