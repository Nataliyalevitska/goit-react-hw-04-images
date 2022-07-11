import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, id, openModal, openLarge, srcLarge }) => {
  return (
    <li id={id} className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        onClick={() => {
          openModal();
          openLarge(srcLarge);
        }}
        src={src}
        alt=""
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  srcLarge: PropTypes.string,
  id: PropTypes.string,
  openModal: PropTypes.func.isRequired,
  openLarge: PropTypes.func.isRequired,

};

export default ImageGalleryItem;