import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PhoneNumberScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={25} color="#000" />
      </TouchableOpacity>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>Add your phone number</Text>
      <Text style={styles.subtitle}>
        We'll send you booking requests, reminders, and other notifications. Ensure this number can receive calls or texts.
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />

      <Text style={styles.disclaimer}>
        By proceeding, you consent to get call, Whatsapp or SMS messages, including by automated means, from GloPilots and its affiliates to the number provided.
      </Text>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('VerificationScreen')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 9,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    width: '40%',
    height: '100%',
    backgroundColor: '#4460EF',
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
    fontWeight: "600",
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  disclaimer: {
    fontSize: 15,
    color: '#666',
    width: 326,
  },
  nextButton: {
backgroundColor: '#4460EF',
paddingVertical: 15,
borderRadius: 5,
alignItems: 'center',
marginVertical: 300,
},
nextButtonText: {
color: '#fff',
fontSize: 18,
},
});

export default PhoneNumberScreen;
