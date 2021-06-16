import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('localAPI.json'
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
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

export default postSlice.reducer

export const selectAllPosts = state => state.posts