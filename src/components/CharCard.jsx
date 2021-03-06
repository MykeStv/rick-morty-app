import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CharCard = ({ item }) => {
    // console.log(item)
    const [hover, setHover] = useState(false)

    const mouseHover = () => {
        setHover(true)
    }
    const mouseLeave = () => {
        setHover(false)
    }

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/rick-morty-app/character', { state: item })
    }


    return (
        <div className='card_content'
            onClick={() => handleClick()}
        >
            <div
                className='card'
            /* onMouseEnter={() => mouseHover()}
            onMouseLeave={() => mouseLeave()} */
            >

                <div className='card_img'>
                    <img src={item.image} alt={item.name} srcSet="" className='character_img' />
                </div>
                <div className={`card_info ${hover ? 'show-info' : ''}`}>
                    <h3 className='name'>{item.name}</h3>
                    {/* {
                        hover ?
                            <p>{item.species}</p>
                            :
                            <></>
                    } */}
                </div>
            </div>
        </div>

    )
}

export default CharCard