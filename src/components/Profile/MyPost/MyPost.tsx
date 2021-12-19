import s from './MyPost.module.css';
import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {ActionType} from '../../../redux/state';
import {PostDataPropsType} from '../Profile';

type MyPostPropsType={
    data:PostDataPropsType
    dispatch:(action: ActionType) => void
}

const MyPost = ({data, dispatch, ...props}: MyPostPropsType) => {


    const addPost = () => {
        dispatch({type: 'ADD-NEW-POST', text: data.newPost})
        }
const changePostHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {dispatch({type: 'CHANGE-POST-STATE', newPost: e.currentTarget.value})}

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea  onChange={changePostHandler} value={data.newPost}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    data.postData.map(v => <Post key={v.id} message={v.message} numberLike={v.numberLike} id={v.id}/>)
                }
            </div>
        </div>
    )

}

export default MyPost