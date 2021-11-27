import s from './MyPost.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPost = () => {

    let postData=[
        {id:1, message:'Hi! How are you?', numberLike:5},
        {id:2, message:'It\'s my first post', numberLike:10}
    ]

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
                <Post message={postData[0].message} numberLike={postData[0].numberLike}/>
                <Post message={postData[1].message} numberLike={postData[1].numberLike}/>
            </div>
        </div>
    )

}

export default MyPost