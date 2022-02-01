import React from 'react';
import {PostDataPropsType} from '../Profile';
import {ActionType, addPostAC, changeNewPostStateAC} from '../../../redux/Action';
import MyPost from './MyPost';

type MyPostConteinerPropsType = {
    data: PostDataPropsType
    dispatch: (action: ActionType) => void
}

const MyPostConteiner = ({data, dispatch, ...props}: MyPostConteinerPropsType) => {


    const addPost = () => {
        dispatch(addPostAC(data.newPost))
    }
    const changePostHandler = (text: string) => {
        dispatch(changeNewPostStateAC(text))
    }

    return (
        <MyPost addPost={addPost} changePostHandler={changePostHandler} newPost={data.newPost}
                postData={data.postData}/>
    )

}

export default MyPostConteiner