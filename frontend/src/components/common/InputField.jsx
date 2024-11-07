import styles from './InputField.module.scss';

const InputField = ({ label, type, id, value, onChange, required }) => {
    return (
        <div className={styles.inputField}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} required={required} />
        </div>
    );
};

export default InputField;
