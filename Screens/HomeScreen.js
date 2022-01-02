import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './TabScreens/WelcomeScreen';
import auth from '@react-native-firebase/auth';
import AboutUsScreen from './TabScreens/AboutUsScreen'
import ProductsScreen from './TabScreens/ProductsScreen'
import ProfileScreen from './TabScreens/ProfileScreen'
// import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, View } from 'react-native';
import CustomTab from '../Components/CustomTab';
import { StatusBar } from 'react-native';
import { Avatar } from 'react-native-paper';


const Tab = createBottomTabNavigator();

const options =({ route,navigation }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Welcome') 
        iconName = focused ? 'home' : 'home';
       else if (route.name === 'About') 
        iconName = focused ? 'info' : 'info';
       else if (route.name === 'Products') 
        iconName = focused ? 'diamond' : 'diamond';
       else if (route.name === 'Profile') 
        iconName = focused ? 'user-circle' : 'user-circle';
      return <Icon name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#C28E39',
    tabBarInactiveTintColor: '#000',
    headerStyle: {
      backgroundColor: '#C28E39',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <View style={{flexDirection: 'row',justifyContent: 'space-evenly',width:100}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
      <Icon name='user-circle' size={24} color={"#fff"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Wish')}>
      <Icon name='heart-o' size={24} color={"#fff"} />
      </TouchableOpacity>
      </View>
    ),
  })
export default function HomeScreen() {
    return (
        <Tab.Navigator screenOptions={options} >
            <Tab.Screen name="Welcome" component={WelcomeScreen}/>
            <Tab.Screen name="Products" component={ProductsScreen} />
            <Tab.Screen name="About" component={AboutUsScreen}  />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

