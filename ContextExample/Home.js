import { useContext } from "react";
import { AppContext } from "../App";

const Home = (props) =>{
    const {name} = useContext(AppContext) 
    return <div>
        <h1>This is Home : {name}</h1>
        
    </div>
}

export default Home;