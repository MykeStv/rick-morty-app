import axios from 'axios'
import { actionTypes } from '../constants/actionTypes'

const api = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character`
})

export const getCharacters = () => async(dispatch) => {

    let dataAPI = []

    api.get('/').then(res => {
        console.log(res.data)
        
        dataAPI = res.data.results
        getNextPage(res.data.info.next)
    })

    const getNextPage = (nextUrl) => {

        if (nextUrl !== null) {
    
            api.get(nextUrl).then(res => {
                res.data.results.forEach(e => dataAPI.push(e))
                getNextPage(res.data.info.next)
            })
    
        } else {
            console.log()
            dispatch({
                type: actionTypes.CHARACTERS, payload: dataAPI
            })
        }
    
    }

}



/* export const getCharacters = () => async(dispatch) => {

    return api.get('/').then(res => {
        // console.log(res.data)
        dispatch({
            type: actionTypes.CHARACTERS, payload: res.data
        })
    })

} */