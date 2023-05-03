
import { useState } from "react"

const StateExample = (props) =>{
  const [age,setAge] = useState(0)
  const [data,setData] = useState('')


  const addEvent = () =>{
  
   setAge( age+1)
  }
  const addInput = (event) =>{
    setData(event.target.value)
  }
  return (
    <div>
      {data}
  
      
      <input type='text' onChange={addInput} />
      <button onClick={addEvent}>Increate Age</button>
      {age}   
    </div>
  )
}

export default StateExample;