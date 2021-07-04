import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { sleep } from '../../utils';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('localAPI.json')
    await sleep(3000);
    return response.json();
})

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        reactionAdded(state, action) { }, // omit logic
        postUpdated(state, action) { } // omit logic
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.posts = state.posts.concat(action.payload)
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

// Action creators are generated for each case reducer function
export const { reactionAdded } = postSlice.actions

export const selectAllPosts = state => state.posts

export default postSlice.reducer