import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchLikes } from './features/like/likeSlice'
import LikesSkeleton from './LikesSkeleton'
import MeLikesContent from './meLikesContent'
import WeLikesContent from './weLikesContent'
import ILikesContent from './iLikesContent';

export const src = './man.svg'

function LikesPanel() {
    const dispatch = useDispatch()
    const activePanel = useSelector(state => state.likes.activeItem)
    const likesStatus = useSelector(state => state.likes.status)
    const error = useSelector(state => state.likes.error)

    useEffect(() => {
        if (likesStatus === 'idle') {
            dispatch(fetchLikes())
        }
    }, [likesStatus, dispatch])

    let content

    if (likesStatus === 'idle' || likesStatus === 'loading') {
        content = <LikesSkeleton />
    } else if (likesStatus === 'succeeded') {

        (activePanel === 'iLiked') ? content = <ILikesContent />
            : (activePanel === 'meLiked') ? content = <MeLikesContent />
                : content = <WeLikesContent />

    } else if (likesStatus === 'failed') {
        content = error
    }
    return (
        <>
            {content}
        </>
    )
}

export default LikesPanel;


