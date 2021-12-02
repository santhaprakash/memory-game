import React,{useState,useEffect} from 'react'
import "./Design.css"
function Single({info,handleChange,flipped}) {
 const handleChoice=()=>{
   handleChange(info)
 }
    return (
               <div key={info.id} className="card" >
                 <div className={flipped ?"flipped":" "} >
                  <img src={info.img} className='front'></img>   
                  <img src={info.bac} onClick={handleChoice} className='back'></img>
                </div>  
                </div>         
    )
}

export default Single
