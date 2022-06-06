import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hi', likesCount: 11},
        {id: 3, message: 'Homo', likesCount: 13},
        {id: 4, message: 'No', likesCount: 12}
    ]
};

test('new post should be added', () => {
    let action = addPostActionCreator("mono");

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(3);
});

test('after deleting length oj messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(3);
});

