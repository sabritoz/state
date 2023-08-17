import React, { useState } from 'react'

const AddModal = ({setshowadd,newmovie,setnewmovie,addmovie}) => {
   
  return (
    <div className='bigModal'>
      <div className='Modale'>
        <button onClick={()=>setshowadd(false)}>X</button>
        <h1>Add New Movie</h1>
        <div className='form'>
            <div className='el'>
            <h2>Name:</h2>
            <input type="text" placeholder='Name of the film ' onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})}/>
            </div>
            <div className='el'>
            <h2>genre:</h2>
            <input type="text" placeholder='genre of the film' onChange={(e)=>setnewmovie({...newmovie,genre:e.target.value})}/>
            </div>
            <div className='el'>
            <h2>image:</h2>
            <input type="text" placeholder='image of the film'  onChange={(e)=>setnewmovie({...newmovie,image:e.target.value})}/>
            </div>
            <div className='el'>
            <h2>description:</h2>
            <input type="text" placeholder='description of the film' onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})}/>
            </div>
            <button className='addbtn' onClick={()=>{addmovie(newmovie);setshowadd(false)}}>ADD</button>
            
            
            
        </div>
   
        
      </div>
    </div>
  )
}

export default AddModal