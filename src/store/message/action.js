import { SEND_MESSAGE_VALUE } from './types'
export function sendMessageValue(message, roomId) {
    return {
        type: SEND_MESSAGE_VALUE,
        payload: { message, roomId },
    }
};