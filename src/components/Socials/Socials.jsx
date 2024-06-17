import React from 'react'
import './Socials.css'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { PiLineVerticalLight } from 'react-icons/pi'

function Socials() {
    return (
        <div className='socials'>
            <IconContext.Provider value={{ color: "#3A4D39", size: "30px", className: "global-class-name" }}>
                <FaLinkedinIn />
                <FaGithub />
            </IconContext.Provider>
            <div className='vertical-line'></div>
            <IconContext.Provider value={{ color: "#3A4D39", size: "0px", className: "global-class-name" }}>
                <PiLineVerticalLight />
            </IconContext.Provider>


        </div>
    )
}

export default Socials
