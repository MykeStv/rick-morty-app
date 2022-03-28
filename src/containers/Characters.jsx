import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import CharCard from '../components/CharCard'
import { BiSearch } from 'react-icons/bi'


const Characters = () => {

    const charactersData = useSelector((state) => state.characters)
    const dispatch = useDispatch()

    const [characters, setCharacters] = useState([])

    const { getCharacters } = bindActionCreators(actionCreators, dispatch)


    useEffect(() => {
        getCharacters()
    }, [])

    useEffect(() => {
        setCharacters(charactersData)
    }, [charactersData])

    const handleSearch = (e) => {
        // console.log(e.target.value.toUpperCase());

        setCharacters(charactersData.filter(
            item => item.name.toUpperCase().includes(e.target.value.toUpperCase()))
        )


    }


    return (
        <div className='characters'>

            <div className='bar'>
                <h1 className='title'>Characters</h1>
                <form className='filter'>
                    <input
                        className='search'
                        type="text"
                        placeholder='Search 🔎'
                        onChange={handleSearch}
                    />
                </form>

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