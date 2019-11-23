import React, { Component } from 'react';
import './App.css';
import Main from './Routes/Main.js';
import Folder from './Routes/Folder.js';
import Note from './Routes/Folder.js';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NotFound from './Routes/Folder.js';
import NoteCard from './components/NoteCard';
// import { Link } from 'react-router-dom';



class App extends Component {
  constructor(){
    super()
  }



  render(){
    return (
      <div className="App">
        <Link to="/" >
         <h1 className="Header"> Noteful </h1>
        </Link>

        <div className="FolderSection">
          {this.props.store.folders.map((folder)=>{
              return( 
                <div className="SideBar">
                  <Link to={`/folder/${folder.id}`}>
                    {folder.name}
                  </Link>
                </div>
              );
          })}
          <button>Add Folder</button>
        </div>

                

        <Switch>
          <Route exact path="/" component={(props) => {
            return <Main 
            store={this.props.store}
            />}}
             />
          <Route exact path="/notes/:noteId" component= {(props) => {
            console.log("noteID",props.match.params.noteId);
            return <Note 
            store={this.props.store}
            currentNote={props.match.params.noteId}/>}}
            />
            
          <Route exact path="/folder/:folderId" component={(props) => {
            console.log("folderID",props.match.params.folderId);
            return <Folder 
            store={this.props.store}
            currentFolder={props.match.params.folderId}/>}}
            />
          
          
<Route component= {(props) => {
            console.log("noteID",props.match.params.noteId);
            return <NotFound 
            store={this.props.store}
            currentNote={props.match.params.noteId}/>}} />
        </Switch> 
      </div>
    );
  }
}

export default App;
