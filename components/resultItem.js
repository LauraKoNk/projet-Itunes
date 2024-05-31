import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ResultItem = ({ item, onSelect }) => {
    return (
        // Élément cliquable pour sélectionner un résultat
        <TouchableOpacity onPress={() => onSelect(item)}>
            <View style={styles.container}>
                <Text style={styles.title}>{item.trackName}</Text>
                <Text style={styles.artist}>{item.artistName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
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

export default ResultItem;