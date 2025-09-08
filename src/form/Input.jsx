import React from 'react';

const Input = ({ label, inputId, type, placeholder = '' }) => {
  return (
    <>
      <label htmlFor={inputId}>
        {label} :
        <input id={inputId} type={type} placeholder={placeholder} />
      </label>
    </>
  );
};

export default Input;
