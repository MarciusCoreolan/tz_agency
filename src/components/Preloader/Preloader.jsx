import React from 'react';
import styles from './preloader.module.scss'

function Preloader(props) {
    return (
        <div className={styles.preloader}>
            <h1>Loading...</h1>
        </div>
    );
}

export default Preloader;
