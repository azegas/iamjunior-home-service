import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BusinessList from '../business/BusinessList';
import CategoryList from '../category/CategoryList';
import styles from './SearchResults.module.scss';
import '../../styles/global.scss';

const SearchResults = ({ services, businesses }) => {
    const { serviceName } = useParams();
    const [filteredBusinesses, setFilteredBusinesses] = useState([]);

    useEffect(() => {
        const filtered = businesses.filter(business => business.category.toLowerCase() === serviceName.toLowerCase());
        setFilteredBusinesses(filtered);
    }, [serviceName, businesses]);

    return (
        <div className="container">
            <div className={styles.searchContainer}>
                <div className={styles.searchSidebar}>
                    <h1 className="title">Categories</h1>
                    <CategoryList services={services} classNameList={styles.categoryListSidebar} classNameCard={styles.categoryCardSidebar} businesses={businesses} showCount={true}/>
                </div>
                    {filteredBusinesses.length > 0 ? (
                        <BusinessList businesses={filteredBusinesses} serviceName={serviceName}/>
                ) : (
                        <p>No results found for {serviceName}.</p>
                    )}
            </div>
        </div>
    );
};

export default SearchResults;