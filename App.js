import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './src/screens/PaymentScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51LkPDVI1ysbNcrp1apmJMegS1kOEOWgTL10ExdL8gdu8dFXBLKjG4FgWM6DD4q7mllFfzgrOGLRZfpZJH8EeZDPP00Htl3j8ov">
      <PaymentScreen />
    </StripeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
