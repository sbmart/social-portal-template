import React from 'react';
import { Feed, Segment } from 'semantic-ui-react';
import { src } from './LikesPanel';
import { useSelector } from 'react-redux'
import { selectAllLikes } from './likeSlice'

export default function MeLikesContent() {
    const likes = useSelector(selectAllLikes)
    return likes.likes.map((item) => <Segment key={item._id}>
        <Feed>
            <Feed.Event>
                <Feed.Label>
                    <img src={src} alt='UserLogo' />
                    <Feed.Meta style={{ textAlign: 'center' }}>
                        {item.age}
                    </Feed.Meta>
                </Feed.Label>
                <Feed.Content>
                    <Feed.Date content={item.name.first + " " + item.name.last + " " + item.age} />
                    <Feed.Summary>
                        Вам поставили лайк <Feed.User as='p'>{item.name.first}</Feed.User>
                        <Feed.Date>{item.registered} </Feed.Date>
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
        </Feed>
    </Segment>);
}
