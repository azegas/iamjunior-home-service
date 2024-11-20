import React from 'react';
import styles from './InputField.module.scss';

type InputFieldProps = {
  label: string;
  type: string;
  id: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  error: boolean;
  errorMessage: string;
};

const InputField = ({
  label,
  type,
  id,
  value,
  name,
  onChange,
  required,
  error,
  errorMessage,
}: InputFieldProps) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
      />
      {error && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default InputField;
