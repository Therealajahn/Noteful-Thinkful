import React, { Component, Fragment } from 'react';
import './App.css';
import Main from './Routes/Main.js';
import Folder from './Routes/Folder.js';
import Note from './Routes/Folder.js';
import NotePage from './Routes/NotePage';
import NoteMain from './Routes/NoteMain';
import { Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import NotFound from './Routes/Folder.js';

// import Data from './Data.js';
// import { DataContext } from './DataContext';
// import DataContext from './DataContext.js';





class App extends Component {
  constructor(){
    super()
    this.state = {
      folders:[],
      notes:[],
    }
    this.findFolder = this.findFolder.bind(this);
    this.findNote = this.findNote.bind(this);
    this.getNotesForFolder = this.getNotesForFolder.bind(this);    
    this.renderNavRoutes = this.renderNavRoutes.bind(this); 
    this.renderMainRoutes = this.renderMainRoutes.bind(this); 
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

  findFolder(folders=[],folderId){
    folders.find(folder => folder.id === folderId);
   } 

  findNote(notes=[], noteId){
    notes.find(note => note.id === noteId);
   }

  getNotesForFolder(notes=[], folderId){
    return (
      (!folderId)
      ? notes
      : notes.filter(note => note.folderId === folderId)
    );
  } 

  renderNavRoutes(){
    const {notes, folders} = this.state;
    return(
      <>
      {['/','folder/:folderId'].map(path => (
      <Route
        exact
        key={path}
        path={path}
        render={routeProps => {
          console.log(routeProps);
          return(
          <Note
            folders={folders}
            notes={notes}
            {...routeProps}/>
          );
        }}/>
      ))}
    <Route 
      path="/note/:noteId"
      render={routeProps => {
        const {noteId} = routeProps.match.params;
        const note = this.findNote(notes, noteId) || {};
        const folder = this.findFolder(folder, note.folderId);
        return <NotePage {...routeProps} folder={folder} />

      }}
      />
      <Route path="/add-folder" component={NotePage} />
      <Route path="/add-note" component={NotePage} />
    </>
    );
  }

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
      {['/','/folder/:folderId'].map(path => {
        <Route
          exact
          key={path}
          path={path}
          render={routeProps => {
            const {folderId} = routeProps.match.params;
            const notesForFolder = this.getNotesForFolder(
              notes,
              folderId
            );
            return (
              <NoteMain
                {...routeProps}
                notes={notesForFolder}
                />
            );
          }} />
      })}
      <Route 
        path="/note/:noteId"
        render={routeProps => {
          const {noteId} = routeProps.match.params;
          const note = this.findNote(notes, noteId);
          return <NoteMain {...routeProps} note={note} />;
        }}
        />
      </>
    );
  }


  
  
  render(){
    

    return (
      <div className="App">
        <Fragment>
          {this.renderNavRoutes()}
          {this.renderMainRoutes()}
          
        </Fragment>
        
       
     
        

       
        
      
           
            
                
        
          {/* <Switch>
            <Route exact path="/" render={() => {
              return <Main 
              store={this.state}
              />}}
              />
            <Route path="/notes/:noteId" render= {() => {
              console.log("noteID",props.match.params.noteId);
              return <Note 
              store={this.state}
              currentNote={props.match.params.noteId}/>}}
              />
              
            <Route  path="/folder/:folderId" render={() => {
              console.log("folderID",props.match.params.folderId);
              return <Folder 
              store={this.state}
              currentFolder={props.match.params.folderId}/>}}
              />
            
            
            <Route render= {() => {
              console.log("noteID",props.match.params.noteId);
              return <NotFound 
              store={this.props.store}
              currentNote={props.match.params.noteId}/>}} />
          </Switch> */}

         
          
          

      </div>
    );
  }
}

export default App;
