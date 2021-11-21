import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Brat
                </div>
                <div className={s.dialog}>
                    Kisa
                </div>
                <div className={s.dialog}>
                    Vlad
                </div>
                <div className={s.dialog}>
                    Starik
                </div>
                <div className={s.dialog}>
                    Some man
                </div>
            </div>
            <div className={s.messeges}>
                <div className={s.messege}>Hi</div>
                <div className={s.messege}>What is your name?</div>
                <div className={s.messege}>Fack you, Spilberg!</div>

            </div>
        </div>
    )
}
