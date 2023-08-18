import React, { useState } from 'react'
import AddModal from './AddModal'

const Navbar = ({setsearch,newmovie,setnewmovie,addmovie}) => {
    const [showadd, setshowadd] = useState(false)
  return (
    <div className='navbare'>
      <nav>
        <h1>Movies App</h1>
        <div className='sth'>
            <input type="text" placeholder='search' onChange={(e)=>setsearch(e.target.value)} />
            <button className='btn' onClick={()=>setshowadd(true)}>Add</button>
            {showadd?<AddModal addmovie={addmovie} newmovie={newmovie} setnewmovie={setnewmovie} setshowadd={setshowadd}/>:null}
        </div>
      </nav>
    </div>
  )
}

export default Navbar