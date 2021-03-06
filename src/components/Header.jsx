import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiGridAlt } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'


const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(prevMenuVisible => !prevMenuVisible)
    }
    // console.log(menuVisible);

    return (
        <div className='header'>

            <nav>
                <NavLink className='logo' to={'/rick-morty-app/'}>Rick & Morty App</NavLink>

                <div className={`nav_menu ${menuVisible ? 'show-menu' : ''}`}>
                    <ul className="nav_list">
                        <li className="nav_item" onClick={() => toggleMenu()}>
                            <NavLink className='link' to={'/rick-morty-app/'}>Home</NavLink>
                        </li>
                        <li className="nav_item" onClick={() => toggleMenu()}>
                            <NavLink className='link' to={'/rick-morty-app/characters'}>Characters</NavLink>
                        </li>
                        <li className="nav_item" onClick={() => toggleMenu()}>
                            <NavLink className='link' to={'/rick-morty-app/favorites'}>Favorites</NavLink>
                        </li>
                        <li className="nav_item" onClick={() => toggleMenu()}>
                            <NavLink className='link' to={'/rick-morty-app/account'}>Account</NavLink>
                        </li>
                    </ul>

                    <div className="close" onClick={() => toggleMenu()}>
                        <GrFormClose />
                    </div>

                </div>

                <div className='nav_toggle' onClick={() => toggleMenu()}>
                    <BiGridAlt />
                </div>

            </nav>


        </div>
    )
}

export default Header