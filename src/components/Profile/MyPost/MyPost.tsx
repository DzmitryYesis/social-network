import s from './MyPost.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post/>
            </div>
        </div>
    )

}

export default MyPost