import React from 'react'
import '../style/account.scss'

const Account = () => {
    return (
        <div className="account">
            <h1 className='title'>Profile</h1>
            <div className='content'>

                <div className="profile">
                    <img src={require('../image/profile_img.jpg')} alt="profile-photo" />
                </div>

                <div className="description">
                    <table>
                        <tbody>
                            <tr>
                                <th>Username:</th>
                                <td>MykeStv22</td>
                            </tr>
                            <tr>
                                <th>Name:</th>
                                <td>Maycol Steven Rincon</td>
                            </tr>
                            <tr>
                                <th>Correo:</th>
                                <td>mykestv22@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='signout'>Sign out</button>
                </div>

            </div>
        </div>
    )
}

export default Account