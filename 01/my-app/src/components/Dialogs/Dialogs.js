import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

let sendText = React.createRef();
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialogItem}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

function Dialogs(props) {
    let state = props.DialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (props.isAuth === false) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.DialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          ref={sendText}>
                </textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
            <AddMessageForm/>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <Formik onSubmit={props.handleSubmit}>
            <Form>
                <div>
                    <Field
                        name="newMessageBody"
                        component="textarea"
                        placeholder="enter your message"/>
                </div>
                <div><button>Send</button></div>
            </Form>
        </Formik>
    )
}

export default Dialogs;
