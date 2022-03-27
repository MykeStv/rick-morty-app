import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Character = () => {

    const location = useLocation()

    const [character, setCharacter] = useState(location.state)

    console.log(location.state);

    const style = {
        padding: '7rem'
    }

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


    return (
        <div style={style} className='character_page'>

            <img src={character.image} alt="" />

            <div className='info_container'>

                <div className="character_title">
                    <h2>{character.name}</h2>
                    <span className='character_status'>
                        <div style={statusIcon}></div>
                        {character.status} - {character.species}
                    </span>
                </div>

                <div className='character_gender'>
                    <span>Gender:</span>
                    <p>{character.gender}</p>
                </div>

                <div className="character_origin">
                    <span>Origin:</span>
                    <p>{character.origin.name}</p>
                </div>

                <div className="character_location">
                    <span>Location:</span>
                    <p>{character.location.name}</p>
                </div>

            </div>

        </div>
    )
}

export default Character