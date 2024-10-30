import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    // const [favorites, setFavorites] = useState(() => {
    //     const savedFavorites = localStorage.getItem('favorites');
    //     return savedFavorites ? JSON.parse(savedFavorites) : [];
    // });

    const favorites = [2, 3, 4, 5, 7];

    const saveFavorite = (favoriteId) => {
        const updatedFavorites = [...favorites, favoriteId];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <FavoriteContext.Provider value={{ favorites, saveFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => useContext(FavoriteContext);
