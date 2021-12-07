import s from './MyPost.module.css';
import React, {ChangeEvent} from 'react';
import Post, {PostDataPropsType} from './Post/Post';

type MyPostPropsType={
    postData:Array<PostDataPropsType>
    addNewPost:(newPost:string)=>void
    newPost:string
    changePostState: (text:string) => void
}

const MyPost = ({postData, addNewPost,newPost,changePostState, ...props}: MyPostPropsType) => {


    const addPost = () => {
            addNewPost(newPost)
        }
const changePostHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {changePostState(e.currentTarget.value)}





    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={newPost} onChange={changePostHandler}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    postData.map(v => <Post key={v.id} message={v.message} numberLike={v.numberLike} id={v.id}/>)
                }
            </div>
        </div>
    )

}

export default MyPost