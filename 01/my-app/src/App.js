import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import MyPosts from "./components/Content/My posts/MyPosts";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className='App-content'>
                    <Route exact path="/dialogs" render={() => <Dialogs state={props.state.DialogsPage}/>}/>
                    <Route path="/content" render={() => <Content/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
