import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const handleFavorite = (favoriteId) => {
        // Initialize updatedFavorites variable
        let updatedFavorites;
        // Check if the favoriteId is already in the favorites array
        if (favorites.includes(favoriteId)) {
            // If it is, filter it out to remove it from the favorites
            updatedFavorites = favorites.filter(id => id !== favoriteId);
        } else {
            // If it's not, add it to the favorites array
            updatedFavorites = [...favorites, favoriteId];
        }
        // Update the state with the new favorites array
        setFavorites(updatedFavorites);
        // Save the updated favorites array to localStorage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <FavoriteContext.Provider value={{ favorites, handleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => useContext(FavoriteContext);
