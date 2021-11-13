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
                <Post message={'Hi! How are you?'} numberLike={5}/>
                <Post message={'It\'s my first post'} numberLike={10}/>
            </div>
        </div>
    )

}

export default MyPost