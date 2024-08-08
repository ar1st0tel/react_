import React from "react";
import classes from "./post.module.css"
const Post = (props) => {
    return <div className={classes.item}>
        <   div>
            <img src='https://www.litres.ru/pub/c/cover/67833976.jpg'/>
            {props.message}
            <div>
            <span> like </span>
            </div>
            </div>
        </div>
}
export default Post
