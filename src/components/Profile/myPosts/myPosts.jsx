import React from "react";
import classes from './myPosts.module.css'
import Post from "./post/post";

const MyPosts = () => {
    return <div>
        my posts
        <div>
            <textarea></textarea>
            <button> add post</button>
        </div>
        <div className={classes.posts}>
            <Post message="IS THAT A SUPRA?"/>
            <Post message="TOTALLY IT IS"/>
        </div>
    </div>
}
export default MyPosts
