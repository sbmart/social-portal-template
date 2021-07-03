import { configureStore } from '@reduxjs/toolkit'
import likeReducer from '../features/like/likeSlice'
import messageReducer from '../features/message/messageSlice'
import postReducer from '../features/posts/postSlice'
import profileReducer from '../features/profile/profileSlice'

export default configureStore({
    reducer: {
        likes: likeReducer,
        message: messageReducer,
        posts: postReducer,
        profile: profileReducer,
    },
})
