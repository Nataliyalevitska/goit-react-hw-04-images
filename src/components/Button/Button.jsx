import PropTypes from 'prop-types';
import s from './Button.module.css'

export const Button = ({ onClick }) => {
     return (
    <div>
      <button onClick={onClick} type="button" className={s.Button}>
        Load more...
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
