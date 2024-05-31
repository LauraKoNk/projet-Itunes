import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useFavorites } from '../store/favoritesContext';
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = () => {
  const { favorites, removeFavorite } = useFavorites(); // Utilisation du contexte des favoris
  const navigation = useNavigation(); // Hook pour la navigation

  // Fonction pour gérer la suppression d'un favori
  const handleRemoveFavorite = (trackId) => {
    removeFavorite(trackId);
  };

  // Fonction pour rendre chaque élément de favori dans la liste
  const renderFavoriteItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Result', { item })}
      >
        <Text style={styles.title}>{item.trackName}</Text>
        <Text style={styles.artist}>{item.artistName}</Text>
      </TouchableOpacity>
      {/* Bouton pour supprimer le favori */}
      <Button title="Supprimer" onPress={() => handleRemoveFavorite(item.trackId)} />
    </View>
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        // Le message affiché si aucun favori n'est ajouté
        <Text>Aucun favori n’a encore été ajouté.</Text>
      ) : (
        // Affichage de la liste des favoris
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.trackId.toString()}
          renderItem={renderFavoriteItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 16,
    color: 'gray',
  },
});

export default FavoritesScreen;