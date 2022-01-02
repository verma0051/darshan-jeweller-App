import React, { useState, useEffect } from 'react'
import { Dimensions, Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator } from 'react-native';
import { Linking } from 'react-native';

const ProductCard = ({ item, liked }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [loading, setLoading] = useState(false)
    const user = auth().currentUser

    useEffect(() => { setIsLiked(liked) }, [liked])
    
    const add = () => {
        setLoading(true)
        firestore().collection("favs").doc(user.email).collection("favs").doc(item.id).set(item).then(() => { setIsLiked(true); setLoading(false); })
    }

    const remove = () => {
        setLoading(true)
        firestore().collection("favs").doc(user.email).collection("favs").doc(item.id).delete().then(() => { setIsLiked(false); setLoading(false); })
    }
    return (
            <View key={item.weight} style={styles.card}>
                <Image source={{ uri: item.image_url }} style={styles.img} />
                <View style={styles.desc}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.weight} >Weight : {item.weight}</Text>
                </View>
                <TouchableOpacity onPress={!isLiked ? add : remove} style={{ position: 'absolute', right: 5, top: 10 }}>
                    {loading ?
                        <ActivityIndicator size="small" color="#0000ff" />
                        :
                        <Icon name={isLiked ? "heart" : 'heart-o'} size={20} color={'red'} />
                        }
                </TouchableOpacity>
            </View>
    )
}

export default ProductCard

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
        width: (Dimensions.get('window').width / 2) - 19,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 5,
        padding: 5,
        position: 'relative',
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
        width: '100%',
        height: 170,
        resizeMode:'stretch'
    }

})
