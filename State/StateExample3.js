import { useState } from "react";

const StateExample3 = () =>{
    const [colorText, setcolorText] = useState('black')
    const tottleText = () =>{
        setcolorText(colorText==='black' ? 'red': 'black')
    }

return (
    <div>
        <button onClick={tottleText}>Show/Hide</button>
        <h1 style={{color: colorText}}>Show/Hide</h1>
       
    </div>
)
}

export default StateExample3;