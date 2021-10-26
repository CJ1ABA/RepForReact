import { SEND_MESSAGE_VALUE, GET_MESSAGES, GET_MESSAGES_ERROR, GET_MESSAGES_START } from './types';
import { PUSH_MSG_START, PUSH_MSG_ERROR, PUSH_MSG } from './types';
const initialState = {
    messages: {
        // room1: [{ id: new Date(), author: 'Bot', message: 'Hello from room-1 local' }],
        // room2: [{ id: new Date(), author: 'Bot', message: 'Hello from room-2' }],
    },
    msgWait: false,
    msgErr: null,
    pushMsgWait: false,
    pushMsgErr: null,
    deliveredMsg: false,
};

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE_VALUE:
            return {
                ...state,
                messages: {
                    ...state.messages, [action.payload.roomId]: [
                        ...state.messages[action.payload.roomId], {
                            ...action.payload.message
                        }
                    ]
                }
            };
        case GET_MESSAGES_START:
            return {
                ...state,
                msgWait: true,
            };
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
                msgWait: false,
            };
        case GET_MESSAGES_ERROR:
            return {
                ...state,
                msgErr: action.payload,
                msgWait: false,
            };
        case PUSH_MSG_START:
            return {
                ...state,
                pushMsgWait: true,
            };
        case PUSH_MSG:
            return {
                ...state,
                deliveredMsg: true,
                msgWait: false,
            };
        case PUSH_MSG_ERROR:
            return {
                ...state,
                pushMsgErr: action.payload,
                msgWait: false,
            };
        default:
            return state;
    }
};