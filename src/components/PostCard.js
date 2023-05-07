import React from 'react'
import { IMAGES } from '../images'

const PostCard = ({title, image, description, views, postedOn}) => {
  return (
    <div class="card">
  <img src={image} alt="Avatar" className='w-full' />
  <div className='meta'>
    <p className='muted mb-0'>Published on</p>
    </div>
    <div class="post-content">
    <h5><b>{title?.length > 35 ? description?.slice(0,35) + "..." : title}</b></h5>
    <p>{description?.length > 50 ? description?.slice(0,500) + "..." : description}</p>
  </div>
</div>
  )
}

export default PostCard