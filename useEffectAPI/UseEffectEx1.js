import Axios from "axios";
import { useEffect, useState } from "react";

const UseEffect = () => {
  //   fetch("https://catfact.ninja/fact")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });    

  const handlerCarFact =() =>{
    Axios.get("https://catfact.ninja/fact").then((res) => {
        setCatFact(res.data.fact);
      });
  }

  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    handlerCarFact()
  },[]);

  return (
    <div>
      <button onClick={handlerCarFact}>Cat Fact</button>
     <h1>{catFact}</h1> 
    </div>
  );
};
export default UseEffect;
