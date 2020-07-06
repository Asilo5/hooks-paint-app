import React from 'react';
import './style.css';

export default React.memo = ({ cb }) => {
  return <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
};