import FirstFile from "./FirstFile"

function App() {
 // initial code 
  // return (
  //   <h1>First Project with Vite by Ashfaq</h1>
  // )

  // new code after FirstFile and firstFunction
  
  const addition= 2+2;  
  return (
    <>
    <FirstFile />
    <h1>second element in separate jsx fragment</h1>
    <h3>This is evaluated expression example. Addition is : {addition}</h3>
    </>
  )
}

export default App
