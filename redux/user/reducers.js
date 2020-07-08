import { SET_USER } from "./constants";

const defaultState = {
    gender: '',
    age: '',
    month: '',
    formButton: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
