import {
  CARD_CLOSE,
  CARD_OPEN,
  DELETE_IMAGE, FILTER_IMAGES,
  GET_IMAGES_ERROR,
  GET_IMAGES_START,
  GET_IMAGES_SUCCESSES, SELECT_PAGE
} from "../actionTypes";

const initialState = {
  images: [],
  imageAlbumId: null,
  loading: false,
  selectCard: null,
  error: null,
  pageNumber: 1,
  pageTotalNumber: 0,
  cardOpenClose: false,
  totalCount: 0
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_IMAGES_SUCCESSES:
      return {
        ...state,
        images: action.images,
        totalCount: action.totalCount,
        loading: false,
        error: null,
      };
    case GET_IMAGES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter(item => item.id !== action.payload),
      };
    case CARD_OPEN:
      return {
        ...state,
        cardOpenClose: true,
        selectCard: action.payload
      };
    case CARD_CLOSE:
      return {
        ...state,
        cardOpenClose: false,
        selectCard: null
      };
    case SELECT_PAGE:
      return {
        ...state,
        pageNumber: action.payload,
        imageAlbumId: null
      };
    case FILTER_IMAGES:
      return {
        ...state,
        imageAlbumId: action.payload,
      };
    default: {
      return state;
    }
  }
};

