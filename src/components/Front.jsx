import React from 'react'
import { useNavigate } from 'react-router-dom'
import movy from './img/movy.jpg'
const Front = () => {
    const navigate= useNavigate()
  return (
    <div className='front'>
        <div>
            <h1>Movies App</h1>
            <h2>Watch Movies Online Free</h2>
            <p>People have many reasons to opt for a free movie site. Many of us want to trim unnecessary expenses. Some do not watch movies frequently enough to pay for a monthly subscription. And many just prefer free entertainment. No matter what your reason is, you should stick with safe sites only. There are thousands of free movie sites on the Internet but only a few of them are safe. Free sites need ads for income while ads can carry viruses and malware. Security is the main reason people decide to pay for paid streaming services instead. If it has been your headache for a while, we have found you the cure: a free site with no ads. Or to be more specific, DopeBox. With no ads, DopeBox poses no risk to both your device and identity. The site also boasts a huge collection of movies for free streaming, HD quality, fast loading speed, constant content updates, and many more outstanding features. A penny saved is a penny earned. Earn money effortlessly by watching movies online for free at DopeBox! </p>
            <button className='btn' onClick={()=>navigate('/home')}>See More</button>
        </div>
        <img src={movy} alt="" /> 
        
        
    </div>
  )
}

export default Front