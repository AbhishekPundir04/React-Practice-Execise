import { useState } from "react"

const ChangeProfile = props =>{
    const [input, newInput] = useState('')
    return <div>
       
        <input onChange={(event)=>newInput(event.target.value)}/>
        <button onClick={()=> {props.setName(input)}}>Click And Chnage pro</button>
        <h1 >ChangeProfile, is user</h1>
    </div>
}

export default ChangeProfile; 