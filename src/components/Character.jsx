import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { GiRoundStar } from 'react-icons/gi'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../App'
import { useDispatch } from 'react-redux';


const Character = () => {

    const location = useLocation()

    const [character, setCharacter] = useState(location.state)
    const dispatch = useDispatch()
    console.log(location.state);

    const { favoriteAction } = bindActionCreators(actionCreators, dispatch)
    // console.log(location.state);

    let statusIcon = {
        width: '0.5rem',
        height: '0.5rem',
        backgroundColor: '#999',
        marginRight: '0.3rem',
        borderRadius: '50%'
    }

    if (character.status == 'Alive') {
        statusIcon = { ...statusIcon, backgroundColor: '#73d802' }
    } else if (character.status == 'Dead') {
        statusIcon = { ...statusIcon, backgroundColor: '#c70404' }
    }

    const addFavorites = () => {
        favoriteAction(character.id)
        setCharacter({ ...character, fav: !character.fav })
    }

    const starIcon = {
        color: character.fav ? '#8307f8' : ''
    }

    return (
        <div className='character_page'>

            <div className='character_card'>
                <img src={character.image} alt="" />

                <div className='info_container'>

                    <div className="character_title">
                        <h2>{character.name}</h2>
                        <span className='character_status'>
                            <div style={statusIcon}></div>
                            {character.status} - {character.species}
                        </span>
                    </div>

                    <div className='character_info'>
                        <span>Gender:</span>
                        <p>{character.gender}</p>
                    </div>

                    <div className="character_info">
                        <span>Origin:</span>
                        <p>{character.origin.name}</p>
                    </div>

                    <div className="character_info">
                        <span>Location:</span>
                        <p>{character.location.name}</p>
                    </div>

                    <div className="add_favorites">
                        <GiRoundStar
                            className='star'
                            onClick={addFavorites}
                            style={starIcon}
                        />

                        <span>Favorites</span>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Character