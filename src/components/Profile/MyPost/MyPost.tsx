import s from './MyPost.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <input/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi! How are you?'} numberLike={5}/>
                <Post message={'It\'s my first post'} numberLike={10}/>
            </div>
        </div>
    )

}

export default MyPost