import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        value: true,
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = loaderSlice.actions

export default loaderSlice.reducer