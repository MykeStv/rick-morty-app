import {actionTypes} from '../constants/actionTypes'

const initialState = {
    characters: [],
    favorites: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.CHARACTERS:
            
            if(state.characters.length > 0) {
                return state
            }
            else {
                return {
                    ...state, characters: action.payload
                };
            }
        
        case actionTypes.FAVORITE:
            // console.log(state.characters)
            
            state.characters.map(item => {  
                if (item.id === action.payload.id){
                    item.fav = !item.fav
                    state.characters[item.id - 1].fav = item.fav                      
                    return item
                }
            })

            return state
            // break;
            
        default:
            // console.log(state)
            return state
    }

}

export default reducer;