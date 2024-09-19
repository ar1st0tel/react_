import React from "react";
import classes from './myPosts.module.css'
import Post from "./post/post";
import Like from "./post/like";

const MyPosts = () => {
    return (<div className={classes.secondItem}>
            my posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={classes.posts}>
                <Post message="IS THAT A SUPRA?"/>
                <span> <Like counterLikes="15"/> </span>
                <Post message="TOTALLY IT IS"/>
                <span> <Like counterLikes="5"/> </span>
            </div>
        </div>
    )
}
export default MyPosts