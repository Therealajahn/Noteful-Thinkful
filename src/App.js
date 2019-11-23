import React, { Component } from 'react';
import './App.css';
import Main from './Routes/Main.js';
import Folder from './Routes/Folder.js';
import Note from './Routes/Folder.js';
import { Link, Route, Switch} from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import NotFound from './Routes/Folder.js';
// import NoteCard from './components/NoteCard';
// import { Link } from 'react-router-dom';
import Data from './Routes/Data';



class App extends Component {
  constructor(){
    super()
    this.state = {
      folders:[],
      notes:[],
    }
  }

  componentDidMount(){
    const folderUrl = "http://localhost:9090/folders"
      fetch(folderUrl)
      .then(reponse => reponse.json())
      .then(folderData=>{
        console.log("folders",folderData);
        this.setState({
          folders:folderData,
        })
      })
      
      const notesUrl = "http://localhost:9090/notes"
      fetch(notesUrl)
      .then(reponse => reponse.json())
      .then(noteData=>{ 
        console.log("notes", noteData);
        this.setState({
          notes: noteData,
        })
      })
    
   
    
      
  }



  
  
  render(){
    
    return (
      <div className="App">
        <Link to="/" >
         <h1 className="Header"> Noteful </h1>
        </Link>
        <data>

        </data>

        <div className="FolderSection">
          {this.state.folders.map((folder)=>{
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
        
        <Data.Provider state={this.state} />
                

        <Switch>
          <Route exact path="/" component={() => {
            return <Main 
            store={this.state}
            />}}
             />
          <Route exact path="/notes/:noteId" component= {(props) => {
            console.log("noteID",props.match.params.noteId);
            return <Note 
            store={this.state}
            currentNote={props.match.params.noteId}/>}}
            />
            
          <Route exact path="/folder/:folderId" component={(props) => {
            console.log("folderID",props.match.params.folderId);
            return <Folder 
            
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
