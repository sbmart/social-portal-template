import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, fetchPosts } from './features/posts/postSlice'
import { Segment } from 'semantic-ui-react';

function RightPanel() {

    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)


    useEffect(() => {
        if (postStatus === 'idle') {
            setTimeout(() => {
                dispatch(fetchPosts())
            }, 1000);
        }
    }, [postStatus, dispatch])

    let content

    if (postStatus === 'idle' || postStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (postStatus === 'succeeded') {
        console.log(posts.posts)
        content = posts.posts.map((item) => <Segment key={item._id}> {item.about}</Segment>)
    } else if (postStatus === 'failed') {
        content = error
    }
    return (
        <>
            {content}
        </>
    )
}

export default RightPanel;