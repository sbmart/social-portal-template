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
            openDeletionModal: false,
        },
    },
    reducers: {
        editSettings: (state, action) => {
            state.settings = action.payload
        },
        toggleDeletionModal: (state) => {
            state.settings.openDeletionModal = !state.settings.openDeletionModal
        },
    },
})

export const { editSettings, toggleDeletionModal } = settingsSlice.actions

// export const selectSettings = state => state.settings
export const selectModalOpen = (state) => state.settings.openDeletionModal

export default settingsSlice.reducer