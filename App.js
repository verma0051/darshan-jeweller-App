import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './Screens/SignInScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import SplashScreen from './Screens/SplashScreen';
import InitialScreen from './Screens/InitialScreen';
import { StatusBar } from 'react-native';
import WishList from './Components/WishList';
import LivePrice from './Screens/LivePrice';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle='dark-content'
        />
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Signin" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wish" component={WishList} />
        <Stack.Screen name="Live" component={LivePrice} options={{headerShown:true,headerStyle: {
      backgroundColor: '#C28E39',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
