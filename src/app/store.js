import { configureStore } from '@reduxjs/toolkit'
import likeReducer from '../features/like/likeSlice'
import messageReducer from '../features/message/messageSlice'
import postReducer from '../features/posts/postSlice'

export default configureStore({
    reducer: {
        like: likeReducer,
        message: messageReducer,
        posts: postReducer,
    },
})
