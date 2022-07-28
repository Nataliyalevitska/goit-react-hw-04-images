import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext, themes } from '../../utils/context/themeContext'
import s from './Button.module.css';

export const Button = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
    <button className={s.loadMore} type="button" onClick={() => onClick()}>
      Load more ...
    </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
