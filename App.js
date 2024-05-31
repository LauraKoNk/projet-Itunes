import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesProvider } from './store/favoritesContext';
import HomeScreen from './screens/homeScreen';
import ResultScreen from './screens/resultScreen';
import FavoritesScreen from './screens/favoriteScreen';

// Création des navigateurs pour les piles et les onglets
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Définition de la pile de navigation pour la page d'accueil
const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Accueil" component={HomeScreen} />
    <Stack.Screen name="Result" component={ResultScreen} />
  </Stack.Navigator>
);

// Définition de la pile de navigation pour la page des favoris
const FavoritesStack = () => (
  // Initialisation du navigateur de pile avec l'écran de favoris comme route initiale
  <Stack.Navigator initialRouteName="Favorites">
    <Stack.Screen name="Mes favoris" component={FavoritesScreen} />
    <Stack.Screen name="Result" component={ResultScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    // Fourniture du contexte des favoris à toute l'application
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator>
          {/* Définition des onglets pour la navigation entre l'accueil et les favoris */}
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Favorites" component={FavoritesStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;
