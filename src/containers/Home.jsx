import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/home.scss'

const Home = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/characters')
    }

    return (
        <div className='home'>
            <div className="images">
                <img
                    className='portal_img'
                    src={require('../image/rick_morty_portal.png')} alt="rick and morty"
                />
            </div>
            <div className='content'>
                <h1 className='title'>
                    Rick & Morty App
                </h1>
                <div className='description'>
                    <p className='info'>
                        This is an application that uses the
                        <a href="https://rickandmortyapi.com/"> Rick and morty api </a>
                        and built in React.
                        <br />
                        Also, it's full responsible, so get it a try.

                    </p>
                    <button
                        className='btn_characters'
                        onClick={handleClick}
                    >
                        See Characters
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home