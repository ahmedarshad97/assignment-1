import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBlogById } from '../../store/blogsActions';
import { IMAGES } from '../../images';


function BlogDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singlePost = useSelector((state) => state.blogs.selectedBlog);
  const views = useSelector((state) => state.blogs.viewCount);

  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, [dispatch]);

  if (!singlePost) {
    return <div>Loading...</div>;
  }

  console.log('single post ==>', singlePost)

  return (
    <div className='single-post'>
      <div className='container'>
        <div className='meta flex'>
            <p className='muted'>Published on {singlePost?.posted || "October 12, 2023" }</p>
            <div className='flex items-center views'>
              <img src={IMAGES.viewIcon} width={20} />
              <p className='muted'>{singlePost.viewCount} Views</p>
            </div>
        </div>
      <h1>{singlePost?.Title}</h1>
      <p>{singlePost?.Subtitle}</p>
      <img src={singlePost?.Image} alt='Post Image' />
      <p>{singlePost?.Article}</p>

      </div>
    </div>
  );
}

export default BlogDetail;