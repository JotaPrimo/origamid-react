import React from 'react';

const Input = ({ label, id, placeholder = '',  ...props }) => {
  return (
    <div style={{ margin: '1rem 0'}}>
     <label htmlFor={id}>{label}</label>
     <input id={id} type="text" placeholder={placeholder} {...props} />
    </div>
  );
};

export default Input