import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer.tsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer.tsx";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store.ts";
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import ("./components/Content/ProfileContainer"));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <Nav/>
                <div className='App-content'>
                    <React.Suspense fallback={<Preloader/>}>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/content/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </React.Suspense>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const JSApp = (props) => {
    return (<BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default JSApp;