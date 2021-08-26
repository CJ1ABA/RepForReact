const initialState = {
    isVisible: 'false',
};

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case 'Clicked':
            return {
                ...state,
                isVisible: !state.isVisible
            };
        default:
            return state;
    }
};