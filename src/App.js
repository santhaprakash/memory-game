import React,{useState,useEffect} from 'react';
import "./Edit.css"
import {Data} from "./Data.js"
import "./Design.css"
import Single from './Single';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function App() {
  const[info,setInfo]=useState([])
  const[choiceone,setChoiceone]=useState(null)
  const[choicetwo,setChoicetwo]=useState(null)
  const[turn,setTurn]=useState(0)
  const shuffle=()=>{
  const cards=[...Data,...Data]
  .sort(()=>(Math.random()-0.5))
  .map((e)=>({...e,id:Math.random()}))
  console.log(cards)
  setInfo(cards);
  setTurn(0)
  }
  
 const handleChange=(e)=>{
  choiceone ? setChoicetwo(e):setChoiceone(e); 
 }

 useEffect(()=>{
if(choiceone&&choicetwo)
{
  if(choiceone.img===choicetwo.img)
  {
   setInfo((prev)=>{
     return prev.map((e)=>{
       if(e.img===choiceone.img){
       return{
...e,flip:true
       }
      }else{
        return e
      }
     })
   })
  
  reset();
}
else{
  setTimeout(()=>reset(),700);
}

}
},[choiceone,choicetwo])

const reset=()=>{
  setChoiceone(null);
  setChoicetwo(null);
  setTurn(turn=>turn+1)
}

  return (
    <div className="main" >
      <div className="flip" >
   <h1 variant="h4" style={{color:"white"}} className="memory">Memory Game</h1>
          <Button size="medium" variant="contained" style={{backgroundColor:"#FFA500"}} endIcon={<RestartAltIcon/>} onClick={shuffle} >New game</Button>
          <h2 className="turns" style={{color:"#FFA500"}}>{turn} turns</h2>      
      </div>
    <div className="submain">
       {info.map((e)=>(
         <Single
         handleChange={handleChange}
         key={e.id}
         info={e}
         flipped={e===choiceone || e===choicetwo || e.flip}
         ></Single>
         
       )
        
        ) }
       
       </div>  
        </div>
       
    
  );
}
export default App;