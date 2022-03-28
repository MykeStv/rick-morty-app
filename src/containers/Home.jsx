import React from 'react'
import '../style/home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className="images">
                <img
                    className='portal_img'
                    src={require('../image/rick_morty_portal.png')} alt="" srcset=""
                />
            </div>
            <div className='content'>
                <h1 className='title'>
                    Rick & Morty App
                </h1>
                <div className='description'>
                    <p className='info'>
                        This is an application that uses the
                        <a href="https://rickandmortyapi.com/"> Rick and morty api</a>
                    </p>
                    <button className='btn_characters'>See Characters</button>
                </div>
            </div>
        </div>
    )
}

export default Home