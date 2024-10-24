import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
                <div className={styles.title}>
                    <h1>Find Home <span>Service/Repair</span> Near You</h1>
                </div>
                <div className={styles.subtitle}>
                    <p>Explore the best home services in your area</p>
            </div>
        </div>
    );
};

export default Hero;