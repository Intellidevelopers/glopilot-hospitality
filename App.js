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
import SettingsScreen from './src/screens/SettingsScreen';
import HostPreferenceScreen from './src/screens/HostScreen';
import NoticePeriodScreen from './src/screens/NoticePeriod';
import NoticeBoardScreen from './src/screens/NoticeBoard';
import PublishScreen from './src/screens/PublishScreen';
import HomePageScreen from './src/screens/HomePage';
import NotificationScreen from './src/screens/Notification';
import CalendarScreen from './src/screens/Calendar';
import StatisticScreen from './src/screens/Statistic';
import ViewsBookingScreen from './src/screens/ViewsBooking';
import TransactionHistoryScreen from './src/screens/TransactionHistory';
import MessageScreen from './src/screens/MessageList';
import ConversationScreen from './src/screens/Conversation';
import AccountScreen from './src/screens/Account';
import AllListingsScreen from './src/screens/AllListings';
import ListingDetailsScreen from './src/screens/ListingDetails';
import ListingTitleScreen from './src/screens/ListingTitle';
import AmenitiesSettingScreen from './src/screens/AmenitiesSetting';
import ListingLocationScreen from './src/screens/ListingLocation';
import GuestBookingScreen from './src/screens/GuestBooking';
import ListingRules from './src/screens/GuestRequirement';
import Listing from './src/screens/Listing';
import CancellationPolicyScreen from './src/screens/CancellationPolicy';
import AvailabilitySettings from './src/screens/AvailabilitySettings';
import TripLength from './src/screens/TripLenght';
import CheckInCheckOut from './src/screens/CheckInCheckOut';
import Regulations from './src/screens/Regulations';
import StatusScreen from './src/screens/Status';
import MyProfile from './src/screens/MyProfile';
import ProfileEdit from './src/screens/ProfileEdit';
import Wallet from './src/screens/Wallet';
import NotificationSettings from './src/screens/NotificationSettings';
import PrivacyScreen from './src/screens/Privacy';
import SecurityScreen from './src/screens/Security';
import HelpCenterScreen from './src/screens/HelpCenter';
import HelpScreen from './src/screens/Help';
import DeleteAccountScreen from './src/screens/DeleteAccount';
import ConsentScreen from './src/screens/Consent';
import WarningScreen from './src/screens/Warning';
import ConfirmationScreen from './src/screens/Confirmation';
import VerificationCodeScreen from './src/screens/VerificationCode';
import SuccessScreen from './src/screens/Success';

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
        <Stack.Screen name="SettingScreen" component={SettingsScreen} />
        <Stack.Screen name="Host" component={HostPreferenceScreen} />
        <Stack.Screen name="Notice" component={NoticePeriodScreen} />
        <Stack.Screen name="NoticeBoard" component={NoticeBoardScreen} />
        <Stack.Screen name="PublishScreen" component={PublishScreen} />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Statistic" component={StatisticScreen} />
        <Stack.Screen name="ViewsBooking" component={ViewsBookingScreen} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
        <Stack.Screen name="MessageList" component={MessageScreen} />
        <Stack.Screen name="Conversation" component={ConversationScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="AllListings" component={AllListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
        <Stack.Screen name="ListingTitle" component={ListingTitleScreen} />
        <Stack.Screen name="AmenitiesSetting" component={AmenitiesSettingScreen} />
        <Stack.Screen name="ListingLocation" component={ListingLocationScreen} />
        <Stack.Screen name="GuestBooking" component={GuestBookingScreen} />
        <Stack.Screen name="Requirement" component={ListingRules} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="Cancellation" component={CancellationPolicyScreen} />
        <Stack.Screen name="AvailabilitySettings" component={AvailabilitySettings} />
        <Stack.Screen name="TripLenght" component={TripLength} />
        <Stack.Screen name="CheckInCheckOut" component={CheckInCheckOut} />
        <Stack.Screen name="Regulations" component={Regulations} />
        <Stack.Screen name="Status" component={StatusScreen} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettings} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="Security" component={SecurityScreen} />
        <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
        <Stack.Screen name="Consent" component={ConsentScreen} />
        <Stack.Screen name="Warning" component={WarningScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="Verification" component={VerificationCodeScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;