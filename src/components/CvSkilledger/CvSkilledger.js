import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./cvSkilledger.scss";

const CvSkilledger = () => {
  const [messageVisible, setMessageVisible] = useState(false);
  return (
    <div className="cvSkilledger">
      <button
        onClick={() => setMessageVisible(true)}
        className="cvSkilledger__btn btn--primary"
      >
        Generate My CV Skilledger
      </button>
      {messageVisible ? (
        <div className="cvSkilledger__message">
          <p>Congratulation! your CV Skilledger "Title" has been created.</p>
          <div className="cvSkilledger__message__qrCode">
            <QRCode size={40} value="http://examplejanet.com/" /> or{" "}
            <a href=" http://examplejanet.com/">http://examplejanet.com/</a>
          </div>
          <button
            onClick={() => setMessageVisible(false)}
            className="btn--secondary"
          >
            OK
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CvSkilledger;
