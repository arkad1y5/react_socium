import React, { component } from 'react';
import d from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsIitems}>
                <div className={d.dialog}>
                    Назарій Підвисоцький
                </div>
                <div className={d.dialog}>
                    Сірожа Семенюк
                </div>
                <div className={d.dialog}>
                    Вова Горобець
                </div>
                <div className={d.dialog}>
                    Ваня Дмитрук
                </div>
            </div>
            <div className={d.messages}>
                <div className="message">Привіт. Як справи?</div>
                <div className="message">Привіт. Да Джонсонюк Борис танки грис як барбатис. </div>
                <div className="message">Оу круто</div>
            </div>
        </div>

    )
}

export default Dialogs;