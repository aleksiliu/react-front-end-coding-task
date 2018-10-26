import React from 'react';
import './Modal.css';
import Button from './Button';

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={show ? 'modal show' : 'modal hide'}>
      <section className="modal-main">
        <p className="close" onClick={handleClose}>
          Close
        </p>
        {children}
        <Button variant="secondary" onClick={handleClose}>
          Done
        </Button>
      </section>
    </div>
  );
};

export default Modal;
