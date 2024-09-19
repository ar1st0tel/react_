import React from "react";
import classes from "./post.module.css"
import Like from "./like";
const Post = (props) => {
    return <div className={classes.item}>
        <   div>
            <img src='https://www.litres.ru/pub/c/cover/67833976.jpg'/>
            {props.message}
            </div>
        </div>
}
export default Post

