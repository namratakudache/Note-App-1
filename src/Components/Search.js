import React from 'react'

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
    <input onChange={(event)=>handleSearchNote(event.target.value)}
    type="text" 
    placeholder='type to search...' />
     <i className="fa-solid fa-magnifying-glass" style={{marginRight:"10px"}} ></i>
    </div>
  )
}

export default Search
