import React from 'react'
import Note from './Note'
import AddNote from './AddNote'


const NotesList = ( { notes , handleAddNote ,handleDeleteNote } ) => {//here we are destructing.. note is prop from App.js

  return (
    <div className='notes-list'>
    {notes.map((note)=>//map to render the  notes
    <Note 
    id={note.id} 
    text={note.text} 
    date={note.date}
    color={note.color}
    handleDeleteNote={handleDeleteNote}
    />
    )}
    {/*  passing handleAddNote to addNote component */}
    <AddNote handleAddNote={handleAddNote}/>
   
    </div>
  )
}

export default NotesList
