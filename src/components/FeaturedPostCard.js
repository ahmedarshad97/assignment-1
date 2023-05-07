import React from 'react'
import { IMAGES } from '../images'

const FeaturedPostCard = ({title, image, description, views, postedOn}) => {
    return (
    <div class="card featured flex">
      <img src={image} alt="Avatar" className='featured-img w-full' />

        <div class="post-content">
        <div className='meta flex space-between items-center'>
        <p className='muted'>Published on {postedOn}</p>
        <p className='featured-text'>FEATURED</p>
        </div>
        <h5><b>{title?.length > 35 ? description?.slice(0,35) + "..." : title}</b></h5>
        <p>{description?.length > 50 ? description?.slice(0,500) + "..." : description}</p>

        <button className='secondary-btn'>Read More<img src={IMAGES.arrowIcon} alt='read more' /></button>
      </div>

    </div>
      )
}

export default FeaturedPostCard