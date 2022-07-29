import {useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from 'react-use';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ imgLarge, alt, onClose }) => {
  useLockBodyScroll(true);
  
  const handelKeydown = useCallback(e => {
    if (e.code === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handelBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handelKeydown);
    return () => {
      window.removeEventListener('keydown', handelKeydown);
    };

  }, [handelKeydown]);


  return createPortal(
    <div className={s.overlay} onClick={handelBackdropClick}>
      <div className={s.modal}>
        <img src={imgLarge} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  imgLarge: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};


// import React from "react";
// import s from "./Modal.module.css";

// export class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.props.handleEscape);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.props.handleEscape);
//   }

//   render() {
//     const { src } = this.props;
//     return (
//       <div className={s.Overlay} onClick={this.props.backDrop}>
//         <div className={s.Modal}>
//           <img src={src} alt="" />
//         </div>
//       </div>
//     );
//   }
// }