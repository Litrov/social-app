import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

//export const getUsersSuperSelector = createSelector();

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalItemsCount = (state: AppStateType) => {
    return state.usersPage.totalItemsCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
}