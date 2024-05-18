import React from 'react';

const Modal = ({ header, body, footer, onClose }) => {
  return (
    <div id="modal" className="modal">
      <div className="content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ?? '標題'}</h2>
        </div>
        <div className="body">
          {body ?? (
            <div>
              <p>這是我的主體</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ?? <h2>這是頁尾</h2>}</div>
      </div>
    </div>
  );
};

export default Modal;
