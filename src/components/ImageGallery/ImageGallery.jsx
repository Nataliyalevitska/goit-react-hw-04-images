import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext, themes } from '../../utils/context/themeContext'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ images, onClick }) => {
 const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, alt }) => (
          <ImageGalleryItem
            onClick={onClick}
            key={id}
            small={webformatURL}
            large={largeImageURL}
            alt={alt}
          />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  imeges: PropTypes.array,
};
