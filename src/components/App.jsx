import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popup from "./Popup/Popup";
import {getImages} from "../redux/actions";

function App(props) {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageNumber);
  const cardOpenClose = useSelector((state) => state.cardOpenClose);

  if (cardOpenClose){
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    dispatch(getImages(pageNumber));
    window.scrollTo({top: 0})
  }, [dispatch, pageNumber]);

  return (
    <div className={'app'}>
      <Header/>
      <Main/>
      {cardOpenClose && <Popup/>}
    </div>
  );
}

export default App;
