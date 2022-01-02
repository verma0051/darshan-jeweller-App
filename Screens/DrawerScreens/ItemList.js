import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View ,Linking} from 'react-native'
import { Caption, Card, Title } from 'react-native-paper';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ProductCard from '../../Components/ProductCard';

export default function ItemList({ route, navigation }) {
    const [data, setData] = useState([])
    const [tap, setTap] = useState(false)
    
    const user = auth().currentUser
    const [liked, setLiked] = useState([])
    const sendMsg = ( msg) => {
        Linking.openURL('whatsapp://send?text=' + "Can U plz tell me the details of this product " +'\n'+ msg  +'\n' + '&phone=91' + '8427460051');
    }
    // useEffect(() => {
    //     let collection = route.params.collection
    //     firestore().collection(collection).get().then((e) => {
    //         setData(e.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    //     })
    // }, [ navigation,route])

    useEffect(() => {
        if (!user) return
        firestore().collection("favs").doc(user.email).collection("favs").get().then((e) => {
            setLiked(e.docs.map(doc => doc.data()))
        })
    }, [user])

    useLayoutEffect(() => {
        let collection = route.params.collection
        navigation.setOptions({ title: collection });
        firestore().collection(collection).get().then((e) => {
            setData(e.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })
    }, [navigation, route])

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cards} >
                    {data.length != 0 ?
                        data.map(item =>
                            <TouchableOpacity key={item.id} onPress={()=>sendMsg( item.title + item.weight)}>
                                <ProductCard
                                    liked={!!liked.find(e => e.id === item.id)}
                                    item={item}
                                />
                            </TouchableOpacity>)
                        :
                        <Text>No Records Found</Text>
                    }
                </View>
            </ScrollView>

        </View>
    )
}

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
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: "wrap",
        paddingHorizontal: 13
    },
    card: {
        width: (Dimensions.get('window').width / 2) - 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
        padding: 5,
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
