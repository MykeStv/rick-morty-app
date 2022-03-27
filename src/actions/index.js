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
        
    }).then(
        api.get('/?page=2').then(res => {
            res.data.results.forEach(e => dataAPI.push(e))
            dispatch({
                type: actionTypes.CHARACTERS, payload: res.data
            })
        })
    )

}

const getNextPage = (nextUrl) => {

    api.get(nextUrl).then(res => {
        console.log()
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