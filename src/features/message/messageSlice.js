import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        newMessages: 5,
    },
    reducers: {
        increment: (state) => {
            state.newMessages += 1
        },
        decrement: (state) => {
            state.newMessages -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = messageSlice.actions

export default messageSlice.reducer