import React, { useCallback } from 'react';
import ImageGallery from 'react-image-gallery';
import {
    Divider,
    // Image,
    Message
} from 'semantic-ui-react'
import { useDropzone } from 'react-dropzone'

const src = './image.png'
const images = [
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1016/1000/600/',
        thumbnail: 'https://picsum.photos/id/1016/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1021/1000/600/',
        thumbnail: 'https://picsum.photos/id/1021/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1020/1000/600/',
        thumbnail: 'https://picsum.photos/id/1020/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1022/1000/600/',
        thumbnail: 'https://picsum.photos/id/1022/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1023/1000/600/',
        thumbnail: 'https://picsum.photos/id/1023/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1024/1000/600/',
        thumbnail: 'https://picsum.photos/id/1024/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1025/1000/600/',
        thumbnail: 'https://picsum.photos/id/1025/250/150/',
    },
];

function PhotosEditable() {
    const onDrop = useCallback(acceptedFiles => {
        console.log('files DragNdropped')
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <Message style={{ width: 500 }}
                            icon='download'
                            header='Перетащите файл сюда'
                            content=''
                        /> :
                        <Message style={{ width: 500 }}
                            icon='photo'
                            header='Кликните для выбора файла'
                            content='Или перетащите файл (до 10Мб) сюда.'
                        />
                }
            </div>
            <Divider hidden />
            <ImageGallery items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />
            {/* <Image.Group size='tiny'>
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
            </Image.Group> */}
            <Divider hidden />
        </>
    )
}

export default PhotosEditable