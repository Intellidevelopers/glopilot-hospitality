// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PropertyScreen from './src/screens/PropertyScreen';
import LocationScreen from './src/screens/LocationScreen';
import MapScreen from './src/screens/MapScreen';
import AmenityScreen from './src/screens/AmenityScreen';
import AddPhotoScreen from './src/screens/AddPhotoScreen';
import AddListingScreen from './src/screens/AddListingScreen';
import AboutScreen from './src/screens/AboutScreen';
import PlaceNameScreen from './src/screens/PlaceNameScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen';
import PhoneNumberScreen from './src/screens/PhoneNumberScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import PhoneScreen from './src/screens/PhoneScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PROPERTY" component={PropertyScreen} />
        <Stack.Screen name="LOCATION" component={LocationScreen} />
        <Stack.Screen name="MAPSCREEN" component={MapScreen} />
        <Stack.Screen name="AmenityScreen" component={AmenityScreen} />
        <Stack.Screen name="AddPhotoScreen" component={AddPhotoScreen} />
        <Stack.Screen name="AddListingScreen" component={AddListingScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="PlaceNameScreen" component={PlaceNameScreen} />
        <Stack.Screen name="CreateProfileScreen" component={CreateProfileScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
        <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;