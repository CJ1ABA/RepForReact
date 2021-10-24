import { db } from '../../api';
import { GET_MESSAGES, PUSH_MSG_START, PUSH_MSG, PUSH_MSG_ERROR } from './types'
import { getMsgError, getMsgStart, sendMessageValue } from './action'
import { clearMessageValue } from '../conversations/action'

export const getMessagesDB = () => async (dispatch) => {
    try {
        dispatch(getMsgStart())
        const responce = await db.ref('messages').get();
        const messages = {};
        responce.forEach((snap) => {
            messages[snap.key] = Object.values(snap.val())
        })
        dispatch({ type: GET_MESSAGES, payload: messages })
    } catch (error) {
        dispatch(getMsgError(error))
    }
}
export const sendMessageToDB = ({ author, message }, roomId) => async (dispatch) => {
    let Time = new Date();
    let msgTime = `${Time.getHours()} : ${Time.getMinutes()}`
    try {
        dispatch({ type: PUSH_MSG_START })
        const responce = await db.ref('messages').child(roomId).push({ author, message, moment: msgTime })
        if (responce) {
            dispatch({ type: PUSH_MSG })
        };
        dispatch(sendMessageValue({ author, message, moment: msgTime }, roomId))
        dispatch(clearMessageValue(roomId))
    }
    catch (error) {
        dispatch({ type: PUSH_MSG_ERROR, payload: error })
    }

}