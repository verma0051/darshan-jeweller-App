import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';
import { Text,View } from 'react-native';
const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Home')
            }
            else {
                navigation.replace('Initial')
            }
        })
    }, [navigation])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly',backgroundColor:'whitesmoke' }}>
        <View style={{flex:1,width:'100%'}}>
            <LottieView source={require('../assets/Animation/12147-diamond-anyjson.json')} autoPlay loop />
        </View>
            <View style={{flex:0.3,alignItems: 'center'}}>
                <Text style={{fontSize:22,fontWeight: 'bold',fontFamily:'monospace',textTransform:'uppercase'}}>Darshan Jewellers</Text>
                <Text style={{fontSize:17,fontFamily:'monospace'}}>(ਖੁਰਦ ਵਾਲੇ)</Text>
            </View>
        </View>
    )
}

export default SplashScreen
