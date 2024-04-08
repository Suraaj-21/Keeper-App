import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
 

  const [noteArray,setNoteArray] = useState([]);
  function addNewNote(note){
    setNoteArray(function (prevArray){
      return [...prevArray,note];
    });
  }

  function deleteNote(id){
    setNoteArray(function (prevArray){
      return(prevArray.filter(function(note,index){
        return index !== id;
      }));
    });
  }
  

  return (
    <div>
      <Header />
      <CreateArea onRecieveNote={addNewNote} />
      {noteArray.map(function(note,index){
        return <Note key={index} id={index} title={note.title} content={note.content} 
        onDeleteNote={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
