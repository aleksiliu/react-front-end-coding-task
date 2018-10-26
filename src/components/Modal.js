import React from 'react';
import './Modal.css';
import Button from './Button';

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={show ? 'modal show' : 'modal hide'}>
      <section className="modal-main">
        {children}
        <Button onClick={handleClose}>Close</Button>
      </section>
    </div>
  );
};

export default Modal;
