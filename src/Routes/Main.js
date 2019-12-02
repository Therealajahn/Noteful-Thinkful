import React from 'react';
import { Link } from 'react-router-dom';

function Main(props) {
  return (
    <div className="Main">
    <Link to="/">
     <h1 className="Header">Noteful</h1> 
    </Link> 
  
  <div className="MainSection">

          {props.notes.map((note)=>{
            console.log("in loop",note.id);
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

        <div className="FolderSection">
          {props.folders.map((folder)=>{
              return( 
                <div key={folder.id} className="SideBar">
                  <Link to={`/folder/${folder.id}`}>
                    {folder.name}
                  </Link>
                </div>
              );
          })}
          <button>Add Folder</button>
        </div>
      </div>
  );
}

export default Main;