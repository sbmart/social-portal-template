import React from 'react'
import { Placeholder, Segment } from 'semantic-ui-react'

function LikesSkeleton() {
    const n = 9 // количество скелетов "в шкафу))"
    return (
        <>
            {/* создаем массив из n undefined элементов и мапим его по ключу i */}
            {[...Array(n)].map((i) =>
                <Segment
                    // key={i} 
                    raised>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line length='very long' />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        {/* <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                            <Placeholder.Line length='full' /> */}
                        {/* <Placeholder.Line length='very long' /> */}
                        {/* </Placeholder.Paragraph> */}
                    </Placeholder>
                </Segment>
            )
            }

        </>
    )
}
export default LikesSkeleton