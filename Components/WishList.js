import React, { useState } from 'react'
import { useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCard from './ProductCard'
import LottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const WishList = () => {
    const [data,setData] = useState([])
    const user = auth().currentUser
    useEffect(()=>{
        if(!user) return
        firestore().collection("favs").doc(user.email).collection("favs").onSnapshot((e) => 
            setData(e.docs.map(doc =>doc.data()))
        )
    },[user])
    return (
        <SafeAreaView style={styles.container}>
        <Text style={{fontSize:26,fontWeight:'bold',color:'#000',textTransform:'uppercase',margin:"10%"}}>My Favourites</Text>
        <ScrollView>
            <View style={styles.cards}>
                {data.length != 0 ?
                    data.map(item =>
                    <ProductCard
                     key={item.id}
                     liked={true}
                      item={item}
                      />)
                    :
                    <LottieView source={require('../assets/Animation/notfound.json')} autoPlay loop style={{width:300, height:300}}/>

                }
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default WishList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cards: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    card: {
        width: (Dimensions.get('window').width / 2),
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
        position: 'relative'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000",
        textTransform: "capitalize",
    },
    weight: {
        color: "#000",
    },
    img: {
        // resizeMode: 'contain',
        width: 180,
        height: 180,
        opacity: 0.7,
        backgroundColor: '#000',
    }

})
