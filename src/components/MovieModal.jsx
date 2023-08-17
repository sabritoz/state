import React from 'react'

const MovieModal = ({setshow,el}) => {
  return (
    <div className='bigModal'>
      <div className='Modal'>
        <button onClick={()=>setshow(false)}>X</button>
        <img src={el.image} alt="" />
        <div className='something'>
                <h1>{el.name}</h1>
                <h2>{el.genre}</h2>
                <p>{el.description}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieModal