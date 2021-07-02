import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
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
            acceptTerms: false
        },
    },
    reducers: {
        editProfile: (state, action) => {
            state.profile = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { editProfile } = profileSlice.actions
export const selectProfile = state => state.profile

export default profileSlice.reducer