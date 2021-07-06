import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        settings: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            recievePushNotifications: false,
            recieveMailNotifications: false,
        },
    },
    reducers: {
        editSettings: (state, action) => {
            state.settings = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { editSettings } = settingsSlice.actions
export const selectSettings = state => state.settings
export const selectPassword = state => state.settings

export default settingsSlice.reducer