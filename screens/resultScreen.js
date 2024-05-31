import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useFavorites } from '../store/favoritesContext';
import Rating from '../components/rating';

const ResultScreen = ({ route }) => {
  const { item } = route.params; // Récupération de l'élément passé en paramètre de la navigation
  const { addFavorite, ratings, rateItem } = useFavorites(); // Utilisation du contexte des favoris

  // Fonction pour ajouter l'élément aux favoris
  const handleAddToFavorites = () => {
    addFavorite(item);
  };

  // Fonction pour noter l'élément
  const handleRate = (newRating) => {
    rateItem(item.trackId, newRating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.trackName}</Text>
      <Text style={styles.artist}>{item.artistName}</Text>
      {item.artworkUrl100 && (
        <Image source={{ uri: item.artworkUrl100 }} style={styles.image} />
      )}
      <Button title="Add to Favorites" onPress={handleAddToFavorites} />
      <Rating rating={ratings[item.trackId] || 0} onRate={handleRate} />
    </View>
  );
};

// Style de l'affichage des détails de la chanson
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  artist: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default ResultScreen;