import React, { component } from 'react';
import p from './Description.module.css';
import { BsLink45Deg, BsFillPinMapFill, BsFillCalendarEventFill, BsDashLg } from "react-icons/bs";
import Button from '../../Button/Button';


const Opis = (props) => {
    return <div className={p.opis_item}>
        <text>{props.x}</text>
        <text>{props.y}</text>
    </div>
}

const Static = (props) => {
    return <div>
        <text>{props.nameS}</text>
        <text>{props.numS}</text>
    </div>
}

const Description = () => {
    return (
        <div>
            <div className={p.oboi}>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
            </div>
            <div >
                <div className={p.ava_and}>
                    <div className={p.ava_item}>
                        <img className={p.ava} src='https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/118395365_1226336461060449_3959337448624768420_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XpkfnR0NLYEAX_8Qtlb&_nc_ht=scontent-frx5-1.xx&oh=00_AT_Sc1kAeO6zEwNWs2XfabUIyjRWScZDGeY3jfvNLxmeYA&oe=6317469B' />
                    </div>
                    <div className={p.opis}>
                        <div className={p.opis_name}>Пінчук Аркадій</div>
                        <Opis x={<BsFillCalendarEventFill className={p.link_icon} />} y="26 вересня 2002" />
                        <Opis x={<BsFillPinMapFill className={p.link_icon} />} y="Медівка" />
                        <Opis x={<BsLink45Deg className={p.link_icon} />} y="arkad1y5" />
                    </div>
                </div>
            </div>
            <div className={p.description}>
                <div >Я обожаю делать фото📷
                    Мне нравится запах свежих страниц📚
                    Задумчивый женский взгляд👁️👁️
                    И мягкость клавиатуры ноотбука💻
                    React Developer👨🏻‍💻
                </div>
                <div className={p.button}>
                    <Button text="Редагувати проіфль" />
                </div>
                <div className={p.static}>
                    <Static nameS="Дописів:" numS="25" />
                    <BsDashLg className={p.static_line} />
                    <Static nameS="Друзів:" numS="13" />
                    <BsDashLg className={p.static_line} />
                    <Static nameS="Читачі:" numS="539" />
                </div>
            </div>
        </div>
    )
}

export default Description;