import React from 'react';
import styles from "../Main/main.module.scss";
import cla from "classnames";
import {selectPage} from "../../redux/actions";
import {useCreatePages} from "../../hooks/useCreatePages";
import {useDispatch, useSelector} from "react-redux";

function Pagination(props) {
    const dispatch = useDispatch();
    const pageNumber = useSelector((state) => state.pageNumber);
    const totalCount = useSelector((state) => state.totalCount);
    const handleSelect = (page) =>{
        dispatch(selectPage(page))
    }
    const pages = [];
    useCreatePages(pages, totalCount, pageNumber )

    const handleUp = () => {
        window.scrollBy(0, -9999999)
    }

    return (
        <div className={styles.pagination}>
            {pages.map((page) => (
                <span
                    onClick={()=>handleSelect(page)}
                    key={page}
                    className={cla(styles.page, page === pageNumber && styles.active)}
                >
            {page}
          </span>
            ))}
            <div className={styles.button_up}>
                <button onClick={handleUp}> Вверх</button>
            </div>
        </div>
    );
}

export default Pagination;
