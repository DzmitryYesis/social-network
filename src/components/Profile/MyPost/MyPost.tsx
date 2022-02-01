import s from './MyPost.module.css';
import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {ProfilePagePropsType} from '../../../redux/profileReducer';

type MyPostPropsType = {
    addPost: () => void
    changePostHandler: (text: string) => void
    profilePage: ProfilePagePropsType
}

const MyPost = (props: MyPostPropsType) => {


    const addPost = () => {
        props.addPost()
    }
    const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostHandler(e.currentTarget.value)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={changePostHandler} value={props.profilePage.newPost}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    props.profilePage.postData.map(v => <Post key={v.id} message={v.message} numberLike={v.numberLike}
                                                              id={v.id}/>)
                }
            </div>
        </div>
    )

}

export default MyPost