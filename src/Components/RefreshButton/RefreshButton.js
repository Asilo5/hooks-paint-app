import React from 'react';
import './style.css';

const RefreshButton = ({ cb }) => {
  return <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
} 

export default RefreshButton;