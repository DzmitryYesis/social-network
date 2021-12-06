import s from './MyPost.module.css';
import React from 'react';
import Post from './Post/Post';
import {ProfilePagePropsType} from '../../../redux/state';


const MyPost = ({postData, addNewPost, ...props}: ProfilePagePropsType) => {

    let newPostRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostRef.current) {
            addNewPost(newPostRef.current?.value)
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostRef}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    postData.map(v => <Post message={v.message} numberLike={v.numberLike} id={v.id}/>)
                }
            </div>
        </div>
    )

}

export default MyPost