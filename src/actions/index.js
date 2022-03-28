import axios from 'axios'
import { actionTypes } from '../constants/actionTypes'

const api = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character`
})

export const getCharacters = () => async(dispatch) => {

    let dataAPI = []

    api.get('/').then(res => {
        // console.log(res.data)
        res.data.results.map(e => e.fav = false)
        dataAPI = res.data.results
        getNextPage(res.data.info.next)
    })

    const getNextPage = (nextUrl) => {

        if (nextUrl !== null) {
    
            api.get(nextUrl).then(res => {
                res.data.results.map(e => e.fav = false)
                res.data.results.forEach(e => dataAPI.push(e))
                getNextPage(res.data.info.next)
            })
    
        } else {
            
            dispatch({
                type: actionTypes.CHARACTERS, payload: dataAPI
            })
        }
    
    }

}

export const favoriteAction = (characterId) => (dispatch) => {

    dispatch({
        type: actionTypes.FAVORITE, payload: { id: characterId}
    })
}



/* export const getCharacters = () => async(dispatch) => {

    return api.get('/').then(res => {
        // console.log(res.data)
        dispatch({
            type: actionTypes.CHARACTERS, payload: res.data
        })
    })

} */