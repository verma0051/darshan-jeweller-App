import React, { useState, useEffect } from 'react'
import { Dimensions, Image, TouchableHighlight } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator } from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-paper';
import RazorpayCheckout from 'react-native-razorpay';

const ProductCard = ({ item, liked }) => {
    const [price, setPrice] = useState(null)
    const [showPrice, setShowPrice] = useState(true)
    const [isLiked, setIsLiked] = useState(false)
    const [loading, setLoading] = useState(false)
    const user = auth().currentUser

    const payment = (data) => {
        let options = {
            description: 'Reach Store For Delivery!',
            image: 'https://cdn.discordapp.com/attachments/869284993887793163/927882288119836702/log2.png.png',
            currency: 'INR',
            key: 'rzp_test_YZuAoQ0TK1M8kr', // Your api key
            amount: data,
            name: 'Darshan Jewellers',
            prefill: {
                email: '',
                contact: '',
                name: ''
            },
            theme: { color: '#F37254' }
        }
        return RazorpayCheckout.open(options).then((data) => {
            alert("Success",{data});
        }).catch((error) => {
            alert("Error",{error});
        });
    }

    useEffect(() => { setIsLiked(liked) }, [liked])
    // axios.get('https://www.metals-api.com/api/latest?access_key=vwqi02ogvgz9044bjgjo9rc5a1j9if6yw5cteacjgh58py2281k03ur05zns&base=INR&symbols=XAU')
    //     .then((res)=>{
    //         let perounce=res.data.rates.XAU
    //         let price=parseInt(perounce)
    //         price=parseInt(price/31)
    //         price=parseInt(price+price*0.13)
    //         setPrice(price)
    //     })
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
                <Button
                    onPress={() => setShowPrice(!showPrice)}
                    labelStyle={{ color: '#fff', letterSpacing: 1 }}
                    style={{ marginVertical: 10, backgroundColor: '#C28E39' }}
                    mode='contained'
                >
                    {showPrice ? "See Price" : "Hide Price"}
                </Button>
                {!showPrice && <Text style={styles.weight} >
                    Price : {parseInt((item.weight)*4946)}
                </Text>}

                <Button
                    onPress={() => payment(parseInt((item.weight) * 4946*100))}
                    labelStyle={{ color: '#fff', letterSpacing: 1 }}
                    style={{ marginVertical: 10, backgroundColor: '#C28E39' }}
                    mode='contained'
                > Buy now
                </Button>
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
        fontWeight: 'bold',
    },
    img: {
        width: '100%',
        height: 170,
        resizeMode: 'stretch'
    }

})
