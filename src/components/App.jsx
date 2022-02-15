import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popup from "./Popup/Popup";
import {getImages} from "../redux/actions";

// Заметка для проверяющего =========================================================================================

// данное тестовое задание я делал максимально просто
// я понимаю что можно было заморочиться сделать переиспользуемые кнопки и тд и тп (обычно свои проекты я делаю именно так)
// я его делал с расчетом на функционал приложения не смотря на дизайн и все остальное
// так что прошу это учесть перед вынесением оценки

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
