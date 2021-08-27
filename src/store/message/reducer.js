import { SEND_MESSAGE_VALUE } from './types'
const initialState = {
    messages: {
        room1: [{ id: new Date(), author: 'Bot', message: 'Hello from room-1' }],
        room2: [{ id: new Date(), author: 'Bot', message: 'Hello from room-2' }],
    },
};

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE_VALUE:
            return {
                ...state,
                messages: {
                    ...state.messages, [action.payload.roomId]: [
                        ...state.messages[action.payload.roomId], {
                            ...action.payload.message, id: new Date()
                        }
                    ]
                }
            };
        default:
            return state;
    }
};