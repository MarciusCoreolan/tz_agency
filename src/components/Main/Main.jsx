import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./main.module.scss";
import Image from "../Image/Image";
import Preloader from "../Preloader/Preloader";
import {cardOpen, deleteImage} from "../../redux/actions";
import Pagination from "../Pagination/Pagination";

function Main(props) {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const loading = useSelector((state) => state.loading);
  const imageAlbumId = useSelector((state) => state.imageAlbumId);

  const albumIdFilter = images.filter(item =>{
      if(imageAlbumId){
          return item.albumId === imageAlbumId
      }
      return images
  })

  const handleDelete = (id) => {
    dispatch(deleteImage(id));
  };
  const handleOpen = (image) => {
    dispatch(cardOpen(image));
  };

  return (
    <div>
      <div className={styles.main}>
        {loading ? (
          <Preloader />
        ) : (
          <>
            {albumIdFilter.map((image) => (
              <Image
                key={image.id}
                clickDelete={handleDelete}
                clickOpen={handleOpen}
                image={image}
              />
            ))}
          </>
        )}
      </div>

      <Pagination/>
    </div>
  );
}

export default Main;
