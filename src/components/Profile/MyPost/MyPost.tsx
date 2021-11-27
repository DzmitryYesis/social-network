import s from './MyPost.module.css';
import React from 'react';
import Post from './Post/Post';

type MyPostProps = {
    value: Array<PostDataPropsType>
}


type PostDataPropsType = {
    id: number
    message: string
    numberLike: number
}

const MyPost = ({value,...props}:MyPostProps) => {

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
                {
                    value.map(v => <Post message={v.message} numberLike={v.numberLike}/>)
                }
            </div>
        </div>
    )

}

export default MyPost