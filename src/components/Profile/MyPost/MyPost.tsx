import s from './MyPost.module.css';
import React from 'react';
import Post from './Post/Post';
import {ProfilePagePropsType} from '../../../redux/state';


const MyPost = ({postData,...props}:ProfilePagePropsType) => {

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
                    postData.map(v => <Post message={v.message} numberLike={v.numberLike}/>)
                }
            </div>
        </div>
    )

}

export default MyPost