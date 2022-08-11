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

let dialogsData = [
    { id: 1, name: 'Назарій Підвисоцький' },
    { id: 2, name: 'Сірожа Семенюк' },
    { id: 3, name: 'Вова Горобець' },
    { id: 4, name: 'Ваня Дмитрук' }
];

let messagesData = [
    { id: 1, messages: 'Привіт. Як справи?' },
    { id: 2, messages: 'Привіт. Да Джонсонюк Борис танки грис як барбатис. ' },
    { id: 3, messages: 'Оу круто' }
];


let dialogElements = dialogsData
    .map((d) => <DialogItem id={d.id} name={d.name} />);

let messagesElements = messagesData
    .map((m) => <Message messages={m.messages} />);


const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsIitems}>
                {dialogElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;