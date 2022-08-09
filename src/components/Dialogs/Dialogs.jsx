import React, { component } from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={d.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className="message">{props.messages}</div>
}

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsIitems}>
                <DialogItem id="1" name='Назарій Підвисоцький' />
                <DialogItem id="2" name='Сірожа Семенюк' />
                <DialogItem id="3" name='Вова Горобець' />
                <DialogItem id="4" name='Ваня Дмитрук' />
            </div>
            <div className={d.messages}>
                <Message messages="Привіт. Як справи?" />
                <Message messages="Привіт. Да Джонсонюк Борис танки грис як барбатис. " />
                <Message messages="Оу круто" />
            </div>
        </div>

    )
}

export default Dialogs;