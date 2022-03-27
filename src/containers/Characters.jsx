import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import CharCard from '../components/CharCard'

const Characters = () => {

    const characters = useSelector((state) => state.characters)
    const dispatch = useDispatch()

    const { getCharacters } = bindActionCreators(actionCreators, dispatch)


    useEffect(() => {
        getCharacters()
    }, [])



    return (
        <div className='characters'>

            <div className='bar'>
                <h1 className='title'>Characters</h1>
                <div className='filter'>Filter</div>

            </div>

            <div className='card-container'>
                {
                    characters.map(char => (
                        <CharCard key={char.id} item={char} />
                    ))
                }
            </div>

        </div>
    )
}

export default Characters