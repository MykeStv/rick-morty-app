import {actionTypes} from '../constants/actionTypes'

const initialState = {
    characters: {
        results: []
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.CHARACTERS:
            return {
                ...state, characters: action.payload
            };
        
        default:
            console.log(state)
            return state
    }

}

export default reducer;