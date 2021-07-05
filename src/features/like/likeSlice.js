import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { sleep } from '../../utils';

export const fetchLikes = createAsyncThunk('likes/fetchLikes', async () => {
    await sleep(2000);
    const response = await fetch('localAPI.json')
    return response.json();
})

export const likeSlice = createSlice({
    name: 'likes',
    initialState: {
        activeItem: 'iLiked',
        newLikes: 2,
        likes: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        incrementLikes: (state) => {
            state.newLikes += 1
        },
        decrementLikes: (state) => {
            state.newLikes -= 1
        },
        resetLikes: (state) => {
            state.newLikes = 0
        },
        changeColumn: (state, action) => {
            state.activeItem = action.payload
        },
    },
    extraReducers: {
        [fetchLikes.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchLikes.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            // Add any fetched likes to the array
            state.likes = state.likes.concat(action.payload)
        },
        [fetchLikes.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

// Action creators are generated for each case reducer function
export const { incrementLikes, decrementLikes, changeColumn, resetLikes } = likeSlice.actions

export const selectAllLikes = state => state.likes

export default likeSlice.reducer