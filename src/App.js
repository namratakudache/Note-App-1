
import NotesList from './Components/NotesList'
import {nanoid} from 'nanoid';
import { useState } from 'react';
import Search from './Components/Search';
import Header from './Components/Header';

const App = () => {
  const [notes,setNotes ] =useState([//useState hook to hold array of notes
      {
       id:nanoid(),
       text:" Complete the project",
       date:"15/05/2023",
      },
      {
      id:nanoid(),
      text:"Pick up the grocreies",
      date:"1/05/2023",
      },
      {
        id:nanoid(),
        text:"Drink more water",
        date:"8/05/2023",
      },
      {
          id:nanoid(),
          text:" This is my forth Note",
          date:"6/05/2023",
      },
      {
            id:nanoid(),
            text:" This is my fifth Note",
            date:"7/05/2023",
      },
      {
        id:nanoid(),
        text:" This is my sixth Note",
        date:"5/05/2023",
      },

]);
      const [searchText,setSearchText] =useState('');
      const [darkMode,setdarkMode] =useState(false);
      const AddNote =(text) => {//accepts user added text 
      const date =new Date();
      const newNote ={
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString()
      }
      const newNotes=[...notes,newNote];
      // this line creates new Array insted of updating existing array
      setNotes(newNotes);  
      }  
      const deleteNote = (id) => {
        const newNotes = notes.filter((note)=>note.id !== id);
        setNotes(newNotes);

      }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
       <div className='container'>
    <Header handleToggleDarkMode={setdarkMode}
    />
     <Search handleSearchNote={setSearchText}/>
     <NotesList 
      notes={notes.filter((note) => 
      note.text.toLowerCase().includes(searchText)
      )}
      handleAddNote={AddNote}//handleAddNote is func ,sending AddNote as prop to child component
      handleDeleteNote={deleteNote}
      />
      
    </div>
    </div>
   
  )
}

export default App
