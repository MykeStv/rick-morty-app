import axios from 'axios'
import { actionTypes } from '../constants/actionTypes'

const api = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character`
})

export const getCharacters = () => async(dispatch) => {

    return api.get('/').then(res => {
        // console.log(res.data)
        dispatch({
            type: actionTypes.CHARACTERS, payload: res.data
        })
    })

}