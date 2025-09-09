import React from 'react';
import type { InputProps } from '../interfaces/Input.interface';

const Input: React.FC<InputProps> = ({
  label,
  id,
  placeholder = '',
  ...props
}) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" placeholder={placeholder} {...props} />
    </div>
  );
};

export default Input;
