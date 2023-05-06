import ChangeProfile from "./ChnageProfile";

const Profile = props =>{
    return <div>
        <h1 >Profile, is user: {props.name}</h1>
        <ChangeProfile setName={props.setName}/>
    </div>
}

export default Profile;