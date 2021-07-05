import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        newMessages: 5,
    },
    reducers: {
        incrementMessages: (state) => {
            state.newMessages += 1
        },
        decrementMessages: (state) => {
            state.newMessages -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { incrementMessages, decrementMessages } = messageSlice.actions

export default messageSlice.reducer