import React ,{useState} from 'react'

import AdviceList from '../src/Data/AdviceList'

export default function RandomAdvice() {
    const[advice,setAdvice]=useState('')
  return (
    <div>
        <AdviceList on selectAdvice={setAdvice} />
        <p>{advice}</p>
        <p>Advice will display here</p>
    </div>
  )
}
