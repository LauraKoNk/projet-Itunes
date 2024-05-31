import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Rating = ({ rating, onRate }) => {
  const [currentRating, setCurrentRating] = useState(rating); // État local pour la note actuelle

  // Fonction pour gérer la notation
  const handleRate = (newRating) => {
    setCurrentRating(newRating); // Mise à jour de la note actuelle
    onRate(newRating); // Appel de la fonction de notation passée en prop
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rate this track:</Text>
      <View style={styles.buttons}>
        {/* Boutons pour noter */}
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            key={star}
            title={star.toString()}
            onPress={() => handleRate(star)}
            color={currentRating >= star ? 'gold' : 'gray'} // Changement de couleur selon la note
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default Rating;
