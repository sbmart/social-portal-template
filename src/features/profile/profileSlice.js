import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        firstName: "John",
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = profileSlice.actions

export default profileSlice.reducer