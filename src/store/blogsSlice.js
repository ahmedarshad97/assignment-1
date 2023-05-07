import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogById, fetchBlogs } from './blogsActions';

const initialState = {
    loading: false,
    blogs: [],
    selectedBlog: null,
    viewCount: 0,
    blog: [
    ]
  };
  
  export const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchBlogs.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
          state.loading = false;
          state.blogs = action.payload;
        })
        .addCase(fetchBlogs.rejected, (state) => {
          state.loading = false;
        })
        .addCase(fetchBlogById.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchBlogById.fulfilled, (state, action) => {
          state.loading = false;
          state.selectedBlog = action.payload;

        })
        .addCase(fetchBlogById.rejected, (state) => {
          state.loading = false;
        });
    },
  });


export const { setBlogs, setSelectedBlog, incrementViewCount } = blogsSlice.actions;

export default blogsSlice.reducer;
