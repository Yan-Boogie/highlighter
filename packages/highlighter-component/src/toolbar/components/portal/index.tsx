import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => (
  <div id="portal-container">
    {typeof document === 'object' ? ReactDOM.createPortal(children, document.body) : null}
  </div>
);

export default Portal;
