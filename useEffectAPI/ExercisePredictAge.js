import Axios from 'axios'
import {  useState } from 'react'
const UseEffectExTwo = () => {

    const [name, setName] = useState('')
    const [predictedAge, setPridictedAge] = useState(null)
    const fetchHandler = () =>{
        
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
            setPridictedAge(res.data)
        })
    }

    // useEffect(()=>{
    //     fetchHandler()
    // })

    return (<div>
       
        
        <input placeholder="Ex. Abhi..." onChange={(event)=>{
            setName(event.target.value)
        }}/>
        <button onClick={fetchHandler}>Predict Age</button>
        <h1>Predict Age: {predictedAge?.age}</h1>
        <h1>Predict Name: {predictedAge?.name}</h1>
        <h1>Predict Count: {predictedAge?.count}</h1>
    </div>)
}
export default UseEffectExTwo;