import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import '../style/footer.scss'


const Footer = () => {
    return (
        <div className="footer">
            <div className='media'>
                <BsGithub className='icon' />
                <BsLinkedin className='icon' />
                <SiGmail className='icon' />
            </div>
            <div className='author'>
                <h4>Created By</h4>
                <span>Maycol S Rincon</span>
            </div>
        </div>
    )
}

export default Footer