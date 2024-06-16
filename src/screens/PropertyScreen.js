import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { colors } from '../utils/colors';
import * as Progress from 'react-native-progress';
import StateDropDown from '../../components/StateDropDown';
import CityDropDownMenu from '../../components/CityDropDownMenu';
import CountryDropDownMenu from '../../components/CountryDropDownMenu';

const PropertyScreen = ({ navigation }) => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [aptSuite, setAptSuite] = useState('');

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    // You can use reverse geocoding here to get the address from coordinates if needed
  };

  const goToNextScreen = () => {
    navigation.navigate('MAPSCREEN'); // Replace 'NextScreen' with the actual name of your next screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
      </View>

      <Progress.Bar 
        progress={0.6} 
        width={null} 
        style={styles.progressBar} 
        color="#4460EF"
      />

      <View style={styles.fixedContent}>
        <Text style={styles.title}>Where exactly is your place located?</Text>
        <Text style={styles.subtitle}>Guests will have access to your exact address only after confirming their reservation.</Text>
        <TouchableOpacity style={styles.locationButton} onPress={getLocation}>
          <Ionicons name="location-outline" size={24} color="#0000ff" />
          <Text style={styles.locationButtonText}>Use current location</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center', color: 'grey' }}>or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.CountryContainer}>
          <Text style={styles.label1}>Country</Text>
          <CountryDropDownMenu />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>State</Text>
          <StateDropDown />
        </View>

        <View style={[styles.inputContainer, styles.row]}>
          <View style={[styles.halfInputContainer, { marginRight: 10 }]}>
            <Text style={styles.label}>City</Text>
            <CityDropDownMenu />
          </View>

          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 90064"
              value={zipCode}
              onChangeText={setZipCode}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Street Address</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 123 Main street"
            value={streetAddress}
            onChangeText={setStreetAddress}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Apt, Suite (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Apt#1"
            value={aptSuite}
            onChangeText={setAptSuite}
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
  },
  fixedContent: {
    paddingHorizontal: 20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,  // Ensure padding at the bottom to see the button
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
  },
  locationButtonText: {
    color: colors.primary,
    marginLeft: 10,
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  inputContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: -15,
  },
  halfInputContainer: {
    flex: 1,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#333',
    fontWeight: '700',
  },
  label1: {
    marginBottom: 5,
    fontSize: 14,
    color: '#333',
    fontWeight: '700',
    marginTop: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,  // Margin top to separate from other inputs
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  progressBar: {
    margin: 20,
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 45,
    left: 5,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  CountryContainer: {
    borderColor: colors.gray,
    borderWidth: 1,
  },
});

export default PropertyScreen;
