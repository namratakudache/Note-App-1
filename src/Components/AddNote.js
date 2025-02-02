import { useState } from 'react'


const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] =useState(''); //default kept as empty string
    const handleChange= (event) =>{  //creating handlechange function,react will automatically pass the value event as argument
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);//updates the value of textarea everytime the text changes 
        }
    }
    const characterLimit=200;
    const handleSaveClick = () => {//event handler function
        if(noteText.trim().length > 0){
            handleAddNote(noteText);//when clicked call handleAddNote
            setNoteText(''); // this will reset the note to empty after saving 
        } 
    }
 
      
  return (
    <div className='note new'>
    <textarea     //user can add note
        rows='8'
        cols='10'
        placeholder='Type to add a note here' 

        value={noteText}
        onChange={handleChange}
        >
    </textarea>
    <div className='note-footer'>
        <small>{characterLimit -  noteText.length}</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
    </div>
      
    </div>
  )
}

export default AddNote
