// import Axios from "axios"
// import { useState } from "react"
// const Excuse = () => {

//     const [party,setPartyExcuse] = useState('')
//     const partyHandler = () =>{
//         Axios.get('https://excuser-three.vercel.app/v1/excuse/party/').then((res)=>{
//            setPartyExcuse(res.data.excuse)
//            console.log(res.data.excuse)
//         })
//     }

//     return (<div>

//         <h1>Generate An Excuse</h1>
//         <button onClick={partyHandler}>Party</button>
//         <button>Family</button>
//         <button>Office</button>

//         <h1>{party}</h1>
//     </div>)
// }

// export default Excuse;

import Axios from "axios"
import { useState } from "react"

const Excuse = () => {
    const [excuse, setExcuse] = useState('')
    
    const handleButtonClick = (excuseType) => {
        const apiUrl = `https://excuser-three.vercel.app/v1/excuse/${excuseType}/`
        Axios.get(apiUrl).then((res) => {
            setExcuse(res.data[0].excuse)
            console.log(res.data.excuse)
        })
    }

    return (
        <div>
            <h1>Generate An Excuse</h1>
            <button onClick={() => handleButtonClick('party')}>Party</button>
            <button onClick={() => handleButtonClick('family')}>Family</button>
            <button onClick={() => handleButtonClick('office')}>Office</button>
            <h1>{excuse}</h1>
        </div>
    )
}

export default Excuse;
