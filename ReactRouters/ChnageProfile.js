import { useState } from "react";

const ChangeProfile = (props) =>{

    const [newProfile, setNewProfile] = useState('')
    return (<div>
        <h1>ChangeProfile Page {props.userName}</h1>

        <input onChange={(event)=>{
            setNewProfile(event.target.value)
        }}/>
        <button onClick={()=>{
            props.setUsername(newProfile)
        }}>Change Profile</button>
    </div>)
    } 
    export default ChangeProfile;