import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../store/blogsActions';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGES } from '../../images';
import PostCard from '../../components/PostCard';
import FeaturedPostCard from '../../components/FeaturedPostCard';


function BlogsList() {

  const dispatch = useDispatch();
  const blogsList = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  console.log('check blogs ==>', blogsList)

  return (
    <div id='blogsListing'>
      <div class="blogs-header">
        <div className='banner-heading'>
            <h1 className='text-center'>Our Blog</h1>
        </div>
        <div className='banner-content flex items-center'>
            <div className='content-wrapper'>
            <h4>Diagnose Car Problems If You Don’t Know Much About Cars</h4>
            <p>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, 
            We provide a full range of front end mechanical.</p>
            </div>
        </div>
        </div>

        <div class="featured-blog">
            <div className='container'>
            <FeaturedPostCard image={IMAGES.featuredImg} title="Should I Buy a New Car or Lease a New Car in 2021?"
            description="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical."
            postedOn="October 28, 2022" />
            </div>
        </div>

      <div className='posts'>
        <div className='container'>
        {blogsList.map((blog, index) => (
            index < 6 && 
          <div className='post' key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <PostCard title={blog.Title} image={blog.Image} description={blog.Subtitle} />    
            </Link>
          </div>
        ))}
        <div className='load-posts w-full text-center'>
        <button>Load More</button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default BlogsList;