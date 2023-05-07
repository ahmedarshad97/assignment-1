import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//Fetch All Blogs
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    try {
        const response = await axios.get('https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/');
        const resData = response.data
        return resData
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
  });
  
//Fetch Single Blog by ID
export const fetchBlogById = createAsyncThunk('blogs/fetchBlogById', async (id) => {
    try {
        const response = await axios.get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`);
        const resData = response.data
        return resData
      } catch (error) {
        console.error(`Error fetching blog with id ${id}:`, error);
      }
  });
