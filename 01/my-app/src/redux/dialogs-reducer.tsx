import {BaseThunkType, InferActionsType} from "./redux-store";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Pent'},
        {id: 3, name: 'Oliver'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hello'},
    ] as Array<MessageType>,
    newMessageBody: ""
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    let stateCopy;
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {
                ...state,
                newMessageBody: action.body
            }
        case 'SEND_MESSAGE':
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            }
        default:
            return state;
    }
}

export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer;