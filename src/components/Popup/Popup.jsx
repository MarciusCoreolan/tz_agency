import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './popup.module.scss'
import {cardClose} from "../../redux/actions";

function Popup(props) {
    const dispatch = useDispatch();
    const selectCard = useSelector((state) => state.selectCard);

    const handleClose = () =>{
        dispatch(cardClose())
    }

    return (
        <div className={styles.popup_background}>
            <div className={styles.popup}>
                <button onClick={handleClose}>X</button>
                <img src={selectCard.url} alt="images"/>
            </div>
        </div>
    );
}

export default Popup;
