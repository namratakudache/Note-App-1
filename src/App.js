
import NotesList from './Components/NotesList'
import {nanoid} from 'nanoid';
import { useState } from 'react';
import Search from './Components/Search';
import Header from './Components/Header';

const App = () => {
  const getRandomColor = () => {
    const colors = ["#C4DFDF", "#E49393", "#AA77FF", "#ECCDB4", "#F7C8E0", "#A0D8B3"]; // Define an array of color values
    const randomIndex = Math.floor(Math.random() * colors.length); // Generate a random index
    return colors[randomIndex]; // Return the color at the random index
  };
  
  const [notes,setNotes ] =useState([//useState hook to hold array of notes


      {
       id:nanoid(),
       text:" Complete the project",
       date:"15/05/2023",
       color: getRandomColor(),
      },
      {
      id:nanoid(),
      text:"Pick up the grocreies",
      date:"1/05/2023",
      color: getRandomColor(),
      },
      {
        id:nanoid(),
        text:"Drink more water",
        date:"8/05/2023",
        color: getRandomColor(),
      },
      {
          id:nanoid(),
          text:" This is my forth Note",
          date:"6/05/2023",
          color: getRandomColor(),
      },
      {
            id:nanoid(),
            text:" This is my fifth Note",
            date:"7/05/2023",
            color: getRandomColor(),
      },
      {
        id:nanoid(),
        text:" This is my sixth Note",
        date:"5/05/2023",
        color: getRandomColor(),
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
