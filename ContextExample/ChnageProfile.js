import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "../App";


const ChangeProfile = props =>{
    const {setName} = useContext(AppContext) 


    const [input, newInput] = useState('')
    return <div>
       
        <input onChange={(event)=>newInput(event.target.value)}/>
        <button onClick={()=> {setName(input)}}>Click And Chnage pro</button>
        <h1 >ChangeProfile, is user</h1>
    </div>
}

export default ChangeProfile; 