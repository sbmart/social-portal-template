import { createSlice } from '@reduxjs/toolkit'


export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        decrement: (state) => {
            state.value -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { decrement } = postSlice.actions

export default postSlice.reducer