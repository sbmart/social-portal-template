import { configureStore } from '@reduxjs/toolkit'
import likeReducer from '../features/like/likeSlice'

export default configureStore({
    reducer: {
        like: likeReducer,
    },
})
