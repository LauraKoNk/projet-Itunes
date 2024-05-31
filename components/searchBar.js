import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState(''); // État local pour la requête de recherche

    // Fonction pour gérer l'événement de recherche
    const handleSearch = () => {
        onSearch(query); // Appel de la fonction de recherche passée en prop
    };

    return (
        // Barre de recherche avec champ de saisie et bouton
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Rechercher un titre ou un artiste"
                value={query}
                onChangeText={setQuery} // Mise à jour de la requête à chaque changement de texte
            />
            <Button title="Rechercher" onPress={handleSearch} />
        </View>
    );
};

// Le style pour la barre de recherche
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
    },
});

export default SearchBar;