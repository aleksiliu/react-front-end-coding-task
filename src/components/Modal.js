import React from 'react';
import './Modal.css';
import Button from './Button';
import close from '../img/close.svg';

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={show ? 'modal show' : 'modal hide'}>
      <img src={close} alt="" className="close" onClick={handleClose} />
      <section className="modal-main">
        {children}
        <Button variant="secondary" onClick={handleClose}>
          Done
        </Button>
      </section>
    </div>
  );
};

export default Modal;
