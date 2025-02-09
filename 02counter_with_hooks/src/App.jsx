import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
//  setCount(count+1)
  
const decreaseValue = ()=>{
  setCount(count-1)
}

const increaseValueUpto20 = ()=>{
  if(count<20){
    setCount(count+1);
  }else{
    alert("Can't increase above 20");
  }
}

const decreaseValueUpto0 = ()=>{
  if(count>0){
    setCount(count-1);
  }else{
    alert("Can't decrease below 0");
  }
}
  return (
    <>
    <button onClick={()=>setCount(count+1)}>Increase Value</button>
    <button onClick={decreaseValue}>Decrease Value</button>
<br></br>
    <button onClick={increaseValueUpto20}>Increase Value upto 20</button>
    <button onClick={decreaseValueUpto0}>Decrease Value upto 0</button>
<h1>Count value in "H1" element : {count}</h1>
    <h2>Count value in "H2" element : {count}</h2>
    <p>Count value in "p" element : {count}</p>
    </>
  )
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}


export default App
