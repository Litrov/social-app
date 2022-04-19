import classes from './Content.module.css';
import React from "react";
import MyPosts from "./My posts/MyPosts";

function Content() {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div className={classes.content}>
            <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'/>
            <h2>My Post</h2>
            <MyPosts/>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}


export default Content;
