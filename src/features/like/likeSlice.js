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
        value: 2,
        likes: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
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
export const { increment, decrement, set, incrementByAmount } = likeSlice.actions

export const selectAllLikes = state => state.likes

export default likeSlice.reducer