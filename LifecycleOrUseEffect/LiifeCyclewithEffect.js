import { useState,useEffect } from "react";

const LifeCycle = () => {
 
  const [text, setText] = useState(false);

  useEffect(()=>{
    console.log('Mounted')
    return ()=>{
      console.log('Unmounted')
    }
  })

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
};
export default LifeCycle;
