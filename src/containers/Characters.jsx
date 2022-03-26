import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import CharCard from '../components/CharCard'

const Characters = () => {

    const characters = useSelector((state) => state.characters.results)
    const dispatch = useDispatch()

    const { getCharacters } = bindActionCreators(actionCreators, dispatch)


    useEffect(() => {
        getCharacters()
    }, [])



    return (
        <div>Characters

            {
                characters.map(char => (
                    <CharCard key={char.id} name={char.name} />
                ))
            }

        </div>
    )
}

export default Characters