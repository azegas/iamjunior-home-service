import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BusinessList from '../components/business/BusinessList';
import CategoryList from '../components/category/CategoryList';
import styles from '../components/category/CategoryList.module.scss';
import '../styles/global.scss';

const SearchResults = ({ services, businesses }) => {
    const { serviceName } = useParams();
    const [filteredBusinesses, setFilteredBusinesses] = useState([]);

    useEffect(() => {
        const filtered = businesses.filter(business => business.category.toLowerCase() === serviceName.toLowerCase());
        setFilteredBusinesses(filtered);
    }, [serviceName, businesses]);

    return (
        <div>
            <div className="searchResultsContainer">
                <div className="searchResultsSidebar">
                    <CategoryList services={services} className={styles.categoryListSidebar}/>
                </div>
                <div className="searchResultsContent">
                    <h1>Results for {serviceName}</h1>
                    {filteredBusinesses.length > 0 ? (
                        <BusinessList businesses={filteredBusinesses} />
                ) : (
                        <p>No results found for {serviceName}.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;