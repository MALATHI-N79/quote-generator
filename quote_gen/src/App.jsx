import { useEffect, useState } from 'react'
import axios from 'axios';

const App=()=> {

const [advice,setAdvice]=useState('')

useEffect(()=>{
  fetchAdvice();
},[])

const fetchAdvice=()=>{
  axios.get('https://api.adviceslip.com/advice')
  .then((response)=>{
    const advice=response.data.slip.advice
    setAdvice(advice)
  })
  .catch((error)=>{
console.log(error);

  })
}
  return (
    <>
       <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
