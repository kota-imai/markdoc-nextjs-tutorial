import React from 'react';

import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export const Note = ({ title, type, children }) => {
  let bgColor = '#e3f7df';
  let iconColor = '#55c500';
  if (type === 'caution') {
    bgColor = '#fdf9e2';
    iconColor = '#f7a535';
  }
  if (type === 'warning') {
    bgColor = '#feebee'; 
    iconColor = '#d60a34';
  }
  return (
    <div className="note">
      <div className="icon">
        {type === 'check' ? <FaCheckCircle /> : type === 'warning' ? <FaExclamationTriangle /> : <FaInfoCircle />}
      </div>
      <div className="message">
        <strong>{title}</strong>
        <span>{children}</span>
      </div>
      <style jsx>
        {`
          .note {
            display: flex;
            justify-content: flex-start;
            align-items: start;
            padding: 12px 16px;
            margin: 4px;
            background: ${bgColor};
            border-radius: 4px;
          }
          .note :global(p) {
            margin: 0;
          }
          .note > .message {
            display: flex;
            flex-direction: column;
          }
          .note > .icon {
            flex-basis: 28px;
            color: ${iconColor};
          }
        `}
      </style>
    </div>
  );
}
