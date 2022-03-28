import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CharCard from '../components/CharCard'

const Favorites = () => {

    const charactersData = useSelector((state) => state.characters)

    // console.log(charactersData);

    const [characterFav, setCharacterFav] = useState([])


    useEffect(() => {
        setCharacterFav(charactersData.filter(character => {
            return character.fav === true
        }))
    }, [])

    return (
        <div className='favorites'>
            <div className="bar">
                <h1 className='title'>Favorites</h1>
            </div>

            <div className='card-container'>
                {
                    characterFav.map(char => (
                        <CharCard key={char.id} item={char} />
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites