import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HousePreference = () => {
  return (
    <View style={styles.container}>
      <Text>House Preference Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HousePreference;
