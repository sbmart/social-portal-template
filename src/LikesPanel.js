import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectAllLikes, fetchLikes } from './features/like/likeSlice'
import { Segment } from 'semantic-ui-react';

import LikesSkeleton from './LikesSkeleton'

function LikesPanel() {

    const dispatch = useDispatch()
    const likes = useSelector(selectAllLikes)
    const likesStatus = useSelector(state => state.likes.status)
    const error = useSelector(state => state.likes.error)


    useEffect(() => {
        if (likesStatus === 'idle') {
            setTimeout(() => {
                dispatch(fetchLikes())
            }, 500);
        }
    }, [likesStatus, dispatch])

    let content

    if (likesStatus === 'idle' || likesStatus === 'loading') {
        content = <LikesSkeleton />
    } else if (likesStatus === 'succeeded') {
        console.log(likes)
        content = likes.likes.map((item) => <Segment key={item._id}> {item.name.first}</Segment>)
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