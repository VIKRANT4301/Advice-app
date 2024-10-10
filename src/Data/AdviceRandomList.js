import React from 'react'

const adviceArray=[
    "Reel dekho",
    "HEHEHEHEHEHE",
    "1-10",
];
export default function AdviceRandomData({onSelectAdvice}) {
    const getRandomAdvice=()=>{
     const randomIndex=Math.floor(Math.random()*adviceArray.length);
    return adviceArray[randomIndex];
    }

   const handleClick=() =>{
        const advice = getRandomAdvice();
        onSelectAdvice(advice)
    }


  return (
    <div>
      <button onClick={handleClick}>Get Advice</button>
    </div>
  )
}













/*import React from 'react'
import AdviceRandom  from './AdviceRandom'


const adviceArray=[
    "HELLO",
]
export default function AdviceList(onSelectAdvice) {

 const getRandomAdvice=()=>{
    const randomIndex=Math.floor(Map.random()*adviceArray.length)
    return adviceArray[randomIndex]
  }
 const handleClick=() =>{
  const advice =getRandomAdvice();
   onSelectAdvice(advice)
 }


  return (
    <div>
        <button onClick={handleClick}Get Advice></button>
    <AdviceRandom />
    </div>

  )
}*/
