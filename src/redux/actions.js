import {
    BASE_URL, CARD_CLOSE,
    CARD_OPEN,
    DELETE_IMAGE, FILTER_IMAGES,
    GET_IMAGES_ERROR,
    GET_IMAGES_START,
    GET_IMAGES_SUCCESSES, SELECT_PAGE
} from "./actionTypes";

export const getImages = (page) => {
    return async (dispatch) => {
        try {
            await dispatch({
                type: GET_IMAGES_START,
            });
            const res = await fetch(BASE_URL + `?_limit=102&_page=${page}`);
            const json = await res.json();
            dispatch({
                type: GET_IMAGES_SUCCESSES,
                images: json,
                totalCount: +res.headers.get('X-Total-Count')
            });
        } catch (e) {
            dispatch({
                type: GET_IMAGES_ERROR,
                payload: "Ошибка получения данных",
            });
            console.error(e);
        }
    };
};

export const deleteImage = (id) =>{
    return async (dispatch) => {
        try {
            await fetch(BASE_URL + `?id=${id}`, {
                method: 'DELETE',
            });
            await dispatch({
                type: DELETE_IMAGE,
                payload: id
            });
        } catch (e) {
            alert('Error: сорян не удалилось, что то пошло не так')
            console.error(e);
        }
    };
}
export const cardOpen = (image) =>{
    return (dispatch) =>{
        dispatch({
            type: CARD_OPEN,
            payload: image
        })
    }
}
export const cardClose = () =>{
    return (dispatch) =>{
        dispatch({
            type: CARD_CLOSE
        })
    }
}
export const selectPage = (page) =>{
    return (dispatch) =>{
        dispatch({
            type: SELECT_PAGE,
            payload: page
        })
    }
}
export const filteredImages = (albumId) =>{
    return (dispatch) =>{
        dispatch({
            type: FILTER_IMAGES,
            payload: albumId
        })
    }
}
