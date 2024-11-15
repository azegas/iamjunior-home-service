import React from 'react';
import styles from './SearchInput.module.scss';

type SearchInputProps = {
  onSearch: (value: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <input type="text" placeholder="Search for a service" onChange={handleChange} />
      <button>Search</button>
    </div>
  );
};

export default SearchInput;
