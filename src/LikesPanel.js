import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectAllLikes, fetchLikes } from './features/like/likeSlice'
import { Feed, Segment } from 'semantic-ui-react';
import LikesSkeleton from './LikesSkeleton'

// const src = './image.png'
const src = './man.svg'

function LikesPanel() {

    const dispatch = useDispatch()
    const likes = useSelector(selectAllLikes)
    // const activePanel = useSelector(selectAllLikes)
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
        console.log(likes)
        content = likes.likes.map((item) => <Segment key={item._id}>
            {/* Вы поставили лайк {item.name.first} {item.registered} */}
            {/*   */}
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src={src} />
                        {/* <Divider hidden /> */}
                        <Feed.Meta style={{ textAlign: 'center' }}>
                            {item.age}
                        </Feed.Meta>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Date content={item.name.first + " " + item.name.last + " " + item.age} />
                        <Feed.Summary>
                            Вы поставили лайк <Feed.User as='text' >{item.name.first}</Feed.User>
                            <Feed.Date>{item.registered}</Feed.Date>
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        </Segment >)
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