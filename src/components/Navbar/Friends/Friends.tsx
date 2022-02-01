import s from './Friends.module.css';
import React from 'react';
import {Friend} from './Friend/Friend';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store-redux';
import {FriendsDataPropsType} from '../../../redux/sidebarReducer';


export const Friends = () => {

    const sidebar = useSelector<AppRootStateType, FriendsDataPropsType>((store) => store.sidebar)

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div>
                {
                    sidebar.friendsData.map(f => <Friend name={f.name} logo={f.logo}/>)
                }
            </div>
        </div>
    )
}