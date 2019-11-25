import React, { Component } from 'react';
import './App.css';
import Main from './Routes/Main.js';
import Folder from './Routes/Folder.js';
import Note from './Routes/Folder.js';
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
       
      {/* <DataContext.Provider value={this.state}>         */}
        
        <Link to="/" >
         <h1 className="Header"> Noteful </h1>
        </Link>
        

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
        
      
           {/*links need to be suurounded by <Router/> element  */}
            
                
        
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
              store={this.state}
              currentFolder={props.match.params.folderId}/>}}
              />
            
            
            <Route component= {(props) => {
              console.log("noteID",props.match.params.noteId);
              return <NotFound 
              store={this.props.store}
              currentNote={props.match.params.noteId}/>}} />
          </Switch>
          
          {/* </DataContext.Provider> */}

      </div>
    );
  }
}

export default App;
