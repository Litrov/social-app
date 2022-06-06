import React from 'react';
import {actions} from "../../../redux/profile-reducer.tsx";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.PostsPage.newPostText,
        posts: state.PostsPage.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(actions.addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = actions.updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
