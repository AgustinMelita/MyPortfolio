import React from 'react';
import '../../styles/spinner.css'; 

export const SpinnerComponent = () => {
  return (
    <div className="spinner-wrapper">
      <div className="background"></div>
      <div className="spinner">
        <div className="spinner1"></div>
      </div>
    </div>
  );
};
