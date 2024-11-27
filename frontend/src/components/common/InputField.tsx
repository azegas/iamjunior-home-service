import React from 'react';
import styles from './InputField.module.scss';

type InputFieldProps = {
  label: string;
  type: string;
  id: string;
  value: string;
  name: string;
  error?: string;
  touched?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const InputField = ({
  label,
  type,
  id,
  value,
  name,
  onChange,
  error,
  touched,
  onBlur,
}: InputFieldProps) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} name={name} onChange={onChange} onBlur={onBlur} />
      {error && touched && <div style={{ color: 'black' }}>{error}</div>}
    </div>
  );
};

export default InputField;
