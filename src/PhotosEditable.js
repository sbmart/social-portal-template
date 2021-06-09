import React, { useCallback } from 'react';
import {
    Divider,
    Image,
    Message
} from 'semantic-ui-react'
import { useDropzone } from 'react-dropzone'

const src = './image.png'

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
            <Image.Group size='tiny'>
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
            </Image.Group>
            <Divider hidden />
        </>
    )
}

export default PhotosEditable