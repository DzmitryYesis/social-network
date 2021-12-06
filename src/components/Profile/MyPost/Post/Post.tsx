import s from './Post.module.css';
import React from 'react';

export type PostDataPropsType = {
    id: number
    message: string
    numberLike: number
}

const Post = ({message, numberLike, ...props}:PostDataPropsType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://www.meme-arsenal.com/memes/58a847c6512c43f49c91cbebb847e27c.jpg'}/>
            {message}
            <div>
                <span>{numberLike} likes</span>
            </div>
        </div>
    )
}

export default Post