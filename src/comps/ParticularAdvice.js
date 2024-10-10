import React, { useState } from 'react'
import AdviceList from '../Data/AdviceList'


export default function ParticularAdvice() {
const[advice,setAdvice]=useState('')

  return (

   <div>
    <AdviceList onSelectAdvice={setAdvice}/>
    <p>Particular Advice</p>
    <p>{advice}</p>

    </div>
  );
}
