import React, {useState} from "react";

function CreateArea(props) {

  const [note,setNote] = useState({title:"",
  content:""});

    function handleChange(event){
      const {name,value} = event.target;
      setNote(function (prevNote){
        if(name==="title"){
          return ({title:value,
            content:prevNote.content});
        }
        else if(name==="content"){
          return ({title:prevNote.title,
            content:value});
        }
      });
    }


  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={function (event){
          event.preventDefault();
          props.onRecieveNote(note);
          setNote({title:"", content:""})
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
