import React from 'react';
import styles from './card.module.scss'

function Image({image, clickDelete, clickOpen}) {
    return (
        <div  className={styles.card}>
            <div>
                <img src={image.thumbnailUrl} alt="images"/>
            </div>
            <div className={styles.card_title}>{image.title}</div>
            <div className={styles.button_container}>
                <button onClick={()=>{clickDelete(image.id)}}>delete</button>
                <button onClick={()=>{clickOpen(image)}}>view</button>
                <span>albumId: {image.albumId}</span>
            </div>
        </div>
    );
}

export default Image;
