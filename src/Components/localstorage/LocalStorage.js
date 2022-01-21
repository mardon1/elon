import React, { useContext, useState } from 'react';
import { UserContext } from '../userContext';
import Modal from '../modal/Modal';

function LocalStorage() {
  const { item } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
    console.log('birnima');
  };
  return (
    <div>
      {item.map((item) => {
        return (
          <div>
            <button onClick={openModal}>birnima</button>
            <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
          </div>
        );
      })}
    </div>
  );
}

export default LocalStorage;
