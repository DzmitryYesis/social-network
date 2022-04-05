import React from 'react';
import {addPostAC, changeNewPostStateAC} from '../../../store/actions/Action';
import MyPost from './MyPost';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../store/store-redux';
import {ProfilePagePropsType} from '../../../store/reducers/profileReducer';


const MyPostConteiner = () => {

    const profilePage = useSelector<AppRootStateType, ProfilePagePropsType>((store) => store.profilePage)
    const dispatch = useDispatch()

    const addPost = () => {
        dispatch(addPostAC(profilePage.newPost))
    }
    const changePostHandler = (text: string) => {
        dispatch(changeNewPostStateAC(text))
    }

    return (
        <MyPost addPost={addPost} changePostHandler={changePostHandler} profilePage={profilePage}/>
    )

}

export default MyPostConteiner