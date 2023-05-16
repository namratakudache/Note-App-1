import React from 'react'


const Note = ( {id, text, date ,handleDeleteNote}) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='foot'>
        <small>{date}</small>
        <button className='delete' onClick={()=> handleDeleteNote(id)}>
        <i className="fa-sharp fa-solid fa-trash icon"></i>
        </button>

      </div>
    </div>
  )
}

export default Note
