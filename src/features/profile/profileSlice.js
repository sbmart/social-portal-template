import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        firstName: "John",
        profile: {
            email: "",
            firstName: "",
            birthDateD: "",
            birthDateM: "",
            birthDateY: "",
            aim: "",
            ageFrom: 0,
            ageTo: 0,
            adress: "",
            about: "",
        },
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        editProfile: (state, action) => {
            state.profile = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, editProfile } = profileSlice.actions
export const selectProfile = state => state.profile

export default profileSlice.reducer