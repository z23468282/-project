import React from 'react';
import { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div>
      <h1>QR 條碼產生器</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="請輸入您的條碼"
        />
        <button
          disabled={input.trim() !== '' ? false : true}
          onClick={handleGenerateQrCode}
        >
          產生
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
