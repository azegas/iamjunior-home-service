import styles from './BookingPanel.module.scss';
import '@/styles/global.scss';
import DateTimePickerComponent from './DateTimePicker';

type BookingPanelProps = {
  show: boolean;
  onClose: () => void;
};

const BookingPanel = ({ show, onClose }: BookingPanelProps) => {
  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        <DateTimePickerComponent />
      </div>
    </div>
  );
};

export default BookingPanel;
