import React from 'react'
import '../../../style/userprofile_style/banner.css'

const Banner = ({ image, heading }) => {
    return (
        <div className='singlebanner'>
            <div className='bannerimgfilter'></div>
            <img className='bannerimg' src={image} alt='noimg' />
            <div className='bannerheading'>
                <h1>{heading}</h1>
            </div>
        </div>
    )
}

export default Banner;