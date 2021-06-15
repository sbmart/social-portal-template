import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        value: true,
    },
    reducers: {
        Qtrue: (state) => {
            state.value = true
        },
        Qfalse: (state) => {
            state.value = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { Qtrue, Qfalse } = loaderSlice.actions

export default loaderSlice.reducer