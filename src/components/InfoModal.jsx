import React from 'react'
import { useContext } from 'react';
import FoodContext from '../context/FoodContext';

const InfoModal = () => {

const {modal, closeModal, modalContent } = useContext(FoodContext)

  return (
    <div className={modal ? `info-modal-container` : `hidden`}>
      <div className="modal-content">
        <button onClick={closeModal} className='modal-button'>X</button>
        <p>{modalContent}</p>
      </div>
    </div>
  );
}

export default InfoModal
