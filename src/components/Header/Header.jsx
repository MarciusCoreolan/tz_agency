import React from 'react';
import styles from './header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {filteredImages} from "../../redux/actions";

function Header(props) {
    const dispatch = useDispatch()
    const images = useSelector(state => state.images)

    const removeDuplicate = images.filter((img, index, self) =>
            index === self.findIndex((dupl) => (
            dupl.albumId === img.albumId
            ))
    )
    const handleFiltered = (albumId) =>{
        dispatch(filteredImages(albumId))
    }
    const handleDown = () =>{
        window.scrollTo(0,document.body.scrollHeight)
    }

    return (
        <div className={styles.header}>
            <h2>Filter</h2>
            <div className={styles.header_filter_container}>
                {removeDuplicate.map(item => (
                    <span
                        onClick={()=>handleFiltered(item.albumId)}
                        className={styles.header_filter}
                        key={item.id}
                    >
                        {item.albumId}
                    </span>)
                )}
            </div>

            <div className={styles.header_down_btn}>
                <button onClick={handleDown}>Вниз</button>
            </div>
        </div>
    );
}

export default Header;
