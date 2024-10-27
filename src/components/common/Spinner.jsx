// https://www.youtube.com/watch?v=aCbQUa7AmII&ab_channel=Codeburst

import svg from '../../assets/spinner.svg'; 
import styles from './Spinner.module.scss';

const Spinner = () => {

    return (
        <div>
            <img className={styles.spinner} src={svg} alt="spinner" />
            <p>Fake loading effect for the first site visit</p>
            <p>Will store businesses data to localstorage</p>
            <p>When I learn how - will store to cache instead</p>
        </div>
    );
};

export default Spinner;