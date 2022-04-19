import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

let sendText = React.createRef();
let dialogsArea = () => {
    let sendMessage = sendText.current.value;
    alert(sendMessage);
}
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
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.DialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={sendText}></textarea>
            </div>
            <div>
                <button onClick={dialogsArea}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;
