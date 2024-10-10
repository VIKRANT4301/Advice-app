import React, { useState } from 'react'
import AdviceData from './AdviceData';

export default function AdviceList() {
  const [category,setCategory]=useState('');

    const getRandomAdvice=(category)=>{
      const advices=AdviceData[category];
      const randomIndex=Math.floor(Math.random()* advices.length);
      return advices[randomIndex]
    }


  const handleGeneratedAdvice =()=>{
    if(category){
      const advice =getRandomAdvice(category)
    }
  }

  return (
    <div>
   <select value={category}>
    <option value="Health">Health</option>
    <option value="Finance">Finance</option>
    <option value="Education">Education</option>
   </select>
<button onClick={handleGeneratedAdvice}>Get Advice</button>

    </div>
  )
}
