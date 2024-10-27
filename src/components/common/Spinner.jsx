// https://www.youtube.com/watch?v=aCbQUa7AmII&ab_channel=Codeburst

import svg from '../../assets/spinner.svg'; 
import styles from './Spinner.module.scss';

const Spinner = () => {

    return (
        <div>
            <img className={styles.spinner} src={svg} alt="spinner" />
            <p>Loading...</p>
            <p>Since you are visiting this site for the first time, it may take a while to load the services and businesses</p>
            <p>Will fetch them from localstorage next (until I learn how to use cache)</p>
        </div>
    );
};

export default Spinner;