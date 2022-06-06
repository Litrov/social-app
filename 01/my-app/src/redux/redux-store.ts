import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer.tsx";
import dialogsReducer from "./dialogs-reducer.tsx";
import sidebarReducer from "./sidebar-reducer.tsx";
import usersReducer from "./users-reducer.tsx";
import authReducer from "./auth-reducer.tsx";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import appReducer from "./app-reducer.tsx";


let rootReducer = combineReducers({
    PostsPage: profileReducer,
    DialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }>
    = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window._store_ = store;

export default store;