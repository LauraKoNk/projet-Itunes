import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchResults = ({ results }) => {
  const navigation = useNavigation(); // Hook pour la navigation

  // Vérification si aucun résultat n'est trouvé
  if (!results || results.length === 0) {
    return (
      <View style={styles.noResults}>
        <Text>Aucun résultat n'a été trouvé</Text>
      </View>
    );
  }

  return (
    // Affichage des résultats de recherche dans une liste
    <FlatList
      data={results}
      keyExtractor={(item) => item.trackId ? item.trackId.toString() : Math.random().toString()}
      renderItem={({ item }) => {
        // Vérifications supplémentaires pour éviter les erreurs d'affichage
        if (!item.trackName || !item.artistName) {
          return null;
        }
        return (
          // Chaque résultat est cliquable et mène à la page des détails
          <TouchableOpacity
            style={styles.resultItem}
            onPress={() => navigation.navigate('Result', { item })}
          >
            <Text>{item.trackName}</Text>
            <Text>{item.artistName}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};


const styles = StyleSheet.create({
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchResults;
