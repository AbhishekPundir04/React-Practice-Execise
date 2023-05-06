import ChangeProfile from "./ChnageProfile";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = props =>{
    const {name} = useContext(AppContext) 
    return <div>
        <h1 >Profile, is user: {name}</h1>
        <ChangeProfile/>
    </div>
}

export default Profile;