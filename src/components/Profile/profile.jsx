import React from "react";
import classes from './porfile.module.css'
import MyPosts from "./myPosts/myPosts";

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img
                src='https://hdpic.club/uploads/posts/2021-12/1638800650_1-hdpic-club-p-toiota-supra-iz-forsazha-1.jpg'/>
        </div>
        <div>
            <a href="#s"> ava + description </a>
        </div>
        <MyPosts />
    </div>
}
export default Profile
