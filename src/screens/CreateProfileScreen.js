import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

// Import the cover image from the assets folder
import defaultCoverImage from '../assets/Vector.png';

const CreateProfileScreen = ({ navigation }) => {
  const [coverPhoto, setCoverPhoto] = useState(defaultCoverImage); // Use the imported image as the default cover photo
  const [caption, setCaption] = useState('');
  const [photos, setPhotos] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const pickCoverImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setCoverPhoto({ uri: result.uri });
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotos([...photos, result.uri]);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
        <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
      </TouchableOpacity>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>Add your profile photo</Text>
      <Text style={styles.subtitle}>
      Add a photo to personalize your profile.
      </Text>
      
      <TouchableOpacity onPress={pickCoverImage} style={styles.imagePicker}>
        <Image source={coverPhoto} style={styles.coverPhoto} />
      </TouchableOpacity>
      
      <TouchableOpacity  onPress={pickImage}>
      <View style={styles.uploadButtonText}>
          <Ionicons name="cloud-upload-outline" size={24} color="black" />
          <Text style={styles.uploadText}>Upload Photos</Text>
        </View>

      </TouchableOpacity>
    
      <ScrollView contentContainerStyle={styles.photoContainer} horizontal>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </ScrollView>
      
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('PhoneNumberScreen')}>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressBar: {
    width: '40%',
    height: '100%',
    backgroundColor: '#4460EF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  imagePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  coverPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e1e1e1',
  },
  coverPhotoLabel: {
    position: 'absolute',
    top: 25,
    left: 5,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.white,
    marginHorizontal: 12,
    marginVertical: 10,
    padding: 5,
    borderRadius: 20,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 35,
    right: 0,
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    zIndex: 1,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  dropdownItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 90,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    borderStyle: 'dashed',
    marginVertical: 20,
    borderWidth: 2,
  },
  uploadButtonText: {
    fontSize: 16,
    marginLeft: 60,
    backgroundColor: colors.white,
    padding: 15,
    width: 200,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.gray,
  },
  uploadText: {
    fontSize: 17,
    color: colors.secondary,
    fontWeight: '500',
  },
  photoContainer: {
    flexDirection: 'row',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#ECEFFD',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 5,
    left: -3,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
  },
});

export default CreateProfileScreen;
