import React, { useState } from 'react';
import Modal from '.';

import './styles.css';

const ModalTest = () => {
  const [showModalPopup, SetShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    SetShowModalPopup((prev) => !prev);
  }

  function onClose() {
    SetShowModalPopup(false);
  }
  return (
    <div>
      <button className="modal-button" onClick={handleToggleModalPopup}>
        打開對話窗
      </button>
      {showModalPopup && (
        <Modal
          header={<h1>自訂標題</h1>}
          body={<div>自訂主體</div>}
          footer={<div>自訂頁尾</div>}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default ModalTest;
