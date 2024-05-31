import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import SearchResults from '../components/searchResults';

const HomeScreen = () => {
  const [searchResults, setSearchResults] = useState([]); // État local pour les résultats de recherche
  const [error, setError] = useState(null); // État local pour les erreurs de recherche

  // Fonction pour gérer la recherche
  const handleSearch = async (query) => {
    try {
      // Requête à l'API iTunes avec le terme recherché
      const response = await axios.get(`https://itunes.apple.com/search?term=${query}`);
      setSearchResults(response.data.results); // Mise à jour des résultats de recherche
      setError(null); 
    } catch (error) {
      console.error(error);
      setError('Echec de récupération des résultats'); // Mise à jour de l'erreur 
    }
  };

  return (
    <View style={styles.container}>
      {/* Barre de recherche avec une fonction de gestion de recherche */}
      <SearchBar onSearch={handleSearch} />
      {error ? (
        // Affichage de l'erreur si elle existe
        <Text>{error}</Text>
      ) : (
        // Affichage des résultats de recherche
        <SearchResults results={searchResults} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;