import React from 'react'
import Moviecards from './Moviecards.jsx'

const Movielist = ({Movies,search}) => {
  return (
    <div className='List'>
      {Movies
      .filter((el)=>el.name.toLowerCase().includes(search.toLowerCase()))
      .map(el=><Moviecards el={el} />)}
    </div>
  )
}

export default Movielist