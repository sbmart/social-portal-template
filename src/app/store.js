import { configureStore } from '@reduxjs/toolkit'
import likeReducer from '../features/like/likeSlice'
import loaderReducer from '../loaderSlice'

export default configureStore({
    reducer: {
        like: likeReducer,
        contentLoader: loaderReducer,
    },
})
