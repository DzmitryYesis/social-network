import s from '../Dialogs.module.css';
import React from 'react';


export type MessageDataPropsType = {
    id: number
    message: string
}

export const Message = ({message, ...props}: MessageDataPropsType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}