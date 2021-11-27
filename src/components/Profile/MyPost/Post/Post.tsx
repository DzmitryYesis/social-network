import s from './Post.module.css';
import React from 'react';

type PostPropsType ={
    message:string
    numberLike:number
}
const Post = ({message, numberLike, ...props}:PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://cdn.vox-cdn.com/thumbor/00awoM5IS2kFITs9546UyMSePBY=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png'}/>
            {message}
            <div>
                <span>{numberLike} likes</span>
            </div>
        </div>
    )
}

export default Post