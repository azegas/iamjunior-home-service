import React from 'react';
import styles from './InputField.module.scss';

type InputFieldProps = {
  label: string;
  type: string;
  id: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputField = ({ label, type, id, value, name, onChange, error }: InputFieldProps) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} name={name} onChange={onChange} />
      {error && <div style={{ color: 'black' }}>{error}</div>}
    </div>
  );
};

export default InputField;
