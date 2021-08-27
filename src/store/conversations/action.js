import { CHANGE_MESSAGE_VALUE } from './types';
import { CLEAR_MESSAGE_VALUE } from './types';
export function changeMessageValue(value, roomId) {
    return {
        type: CHANGE_MESSAGE_VALUE,
        payload: { value, roomId },
    }
}
export function clearMessageValue(roomId) {
    return {
        type: CLEAR_MESSAGE_VALUE,
        payload: roomId,
    }
}