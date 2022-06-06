import React from "react";
import {actions} from "../../redux/dialogs-reducer.tsx";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(actions.sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(actions.updateNewMessageBodyCreator(body))
        }
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);
