import ChangeProfile from "./ChnageProfile";

const Profile = (props) =>{
    return (<div>
        <div>Profile is : {props.userName} 
        <ChangeProfile setUsername = {props.setUserName}/></div>
    </div>)
    } 
    export default Profile;