import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BusinessList from '../business/BusinessList';
import CategoryList from '../category/CategoryList';
import styles from './SearchResultsCetegoryList.module.scss';

const SearchResultsCetegoryList = ({ services, businesses }) => {
    const { serviceName } = useParams();
    const [filteredBusinesses, setFilteredBusinesses] = useState([]);

    useEffect(() => {
        const filtered = businesses.filter(business => business.category.toLowerCase() === serviceName.toLowerCase());
        setFilteredBusinesses(filtered);
    }, [serviceName, businesses]);

    return (
        <div className="container">
            <div className={styles.searchResultsContainer}>
                <div className={styles.searchResultsSidebar}>
                    <p>Categories</p>
                    <CategoryList services={services} classNameList={styles.categoryListSidebar} classNameCard={styles.categoryCardSidebar} businesses={businesses} showCount={true}/>
                </div>
                    {filteredBusinesses.length > 0 ? (
                        <BusinessList businesses={filteredBusinesses} />
                ) : (
                        <p>No results found for {serviceName}.</p>
                    )}
            </div>
        </div>
    );
};

export default SearchResultsCetegoryList;