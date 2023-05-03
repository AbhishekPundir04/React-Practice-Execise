import { useState } from "react";

const StateExample4 = () =>{
    const [count, setCount] = useState(0)

    const countPlusHandler = () =>{
        setCount(count+1)
    }
    const countMinus = () => {
        setCount(count === 0 ? 0 : count - 1)
      }
      
    const countZero = () =>{
        setCount(0)
    }


return (
    <div>
        <button onClick={countPlusHandler}>increase</button>
        <button onClick={countMinus}>decrease</button>
        <button onClick={countZero}>zero</button>

        {count}
       
    </div>
)
}

export default StateExample4;