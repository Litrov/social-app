// @ts-ignore
import {authAPI, ResultCodesEnum, securityAPI} from "../api/api.tsx";
import {BaseThunkType, InferActionsType} from "./redux-store";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    let stateCopy;
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => ({
        type: 'SET_USER_DATA',
        payload: {userId, email, login}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'GET_CAPTCHA_URL_SUCCESS',
        payload: {captchaUrl}
    } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = response.data.data;
        dispatch(actions.setAuthUserData(id, email, login));
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>