import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/use-fetch';
import Loading from '../common/Loading';
import Error from '../common/Error';
import styles from './BusinessDetail.module.scss';
import '../../styles/global.scss';

const BusinessDetail = () => {
    const { id } = useParams(); // Get the business id from the URL
    const { data, error, isLoading } = useFetch(`http://localhost:8000/businesses/` + id);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    if (data) {
        return (
            <div className="container">
                <h1 className="title">{data.name}</h1>
                <img src={data.image} alt={data.name} className={styles.businessImage} />
                <p><strong>Category:</strong> {data.category}</p>
                <p><strong>Description:</strong> {data.description}</p>
                <p><strong>Address:</strong> {data.address}</p>
                <p><strong>Contact Person:</strong> {data.worker}</p>
            </div>
        );
    }

    return null;
}

export default BusinessDetail;