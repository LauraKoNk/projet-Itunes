import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext(); // Création du contexte pour les favoris

// Fournisseur de contexte pour les favoris
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // État pour les favoris
  const [ratings, setRatings] = useState({}); // État pour les notations

  // Fonction pour ajouter un favori
  const addFavorite = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  // Fonction pour retirer un favori
  const removeFavorite = (trackId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(item => item.trackId !== trackId));
  };

  // Fonction pour noter un élément
  const rateItem = (itemId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [itemId]: rating,
    }));
  };

  return (
    // Fourniture des valeurs du contexte
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, ratings, rateItem }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte des favoris
export const useFavorites = () => useContext(FavoritesContext);