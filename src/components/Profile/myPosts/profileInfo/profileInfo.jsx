import React from "react";
import classes from "./porfileInfo.module.css"

const ProfileInfo = () => {
    return <div className={classes.content}>
        <div>
            <img
                src='https://hdpic.club/uploads/posts/2021-12/1638800650_1-hdpic-club-p-toiota-supra-iz-forsazha-1.jpg'/>
        </div>
        <div className={classes.item}>
            <a href="#s"> ava + description </a>
        </div>
    </div>
}
export default ProfileInfo
