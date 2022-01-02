import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
export default function Loading(props) {
    return (
        <View style={{width:'100%'}}>
             <LottieView source={require('./Animation/12147-diamond-anyjson.json')} autoPlay loop />
        </View>
    )
}

const styles = StyleSheet.create({

})
