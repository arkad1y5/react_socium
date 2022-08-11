import React, { component } from 'react';
import n from './NewPost.module.css';
import { BsCamera, BsCaretRightSquare, BsCardImage, BsFileEarmarkMusic, BsFillGeoAltFill, BsGear } from "react-icons/bs";
import Button from '../../Button/Button';



const NewPost = () => {
    return (
        <div className={n.newPost}>
            <div className={n.ava_new}>
                <img src='https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/118395365_1226336461060449_3959337448624768420_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XpkfnR0NLYEAX_8Qtlb&_nc_ht=scontent-frx5-1.xx&oh=00_AT_Sc1kAeO6zEwNWs2XfabUIyjRWScZDGeY3jfvNLxmeYA&oe=6317469B' />
            </div>
            <div>
                <textarea className={n.pole} placeholder="Що у вас нового?"></textarea>
                <div className={n.newPost_item}>
                    <div>
                        <BsCamera className={n.newPost_icon} />
                        <BsCaretRightSquare className={n.newPost_icon} />
                        <BsCardImage className={n.newPost_icon} />
                        <BsFileEarmarkMusic className={n.newPost_icon} />
                        <BsFillGeoAltFill className={n.newPost_icon} />
                        <BsGear className={n.newPost_icon} />
                    </div>
                    <div>
                        <Button text="Поширити" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewPost;



