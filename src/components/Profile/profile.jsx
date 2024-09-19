import React from "react";
import classes from './porfile.module.css'
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./myPosts/profileInfo/profileInfo";

const Profile = () => {
    return (<div>
        <ProfileInfo/>
        <MyPosts />
    </div>
)
}
export default Profile
