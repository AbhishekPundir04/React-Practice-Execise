import { useState } from "react";

const StateExample2 = () =>{
    const [showText, setShowText] = useState(false)
    const tottleText = () =>{
        setShowText(!showText)
    }

return (
    <div>
        <button onClick={tottleText}>Show/Hide</button>
        {showText && <h1>hello sir</h1>}
    </div>
)
}

export default StateExample2;