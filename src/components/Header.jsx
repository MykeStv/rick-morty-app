import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>

            <nav>
                <NavLink to={'/'}>Rick & Morty App</NavLink>

                <div className='nav_menu'>
                    <ul className="nav_list">
                        <li className="nav_item">
                            <NavLink to={'/'}>home</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to={'/characters'}>Characters</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to={'/favorites'}>Favorites</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to={'/account'}>Account</NavLink>
                        </li>
                    </ul>
                </div>

            </nav>


        </div>
    )
}

export default Header