import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Card, Paragraph, Title } from 'react-native-paper';
import Cards from '../../Components/Cards';
import axios from 'axios';
import { Linking } from 'react-native';

export default function WelcomeScreen(props) {
    const [data, setData] = useState([])
    const [price, setPrice] = useState(null)
    const [loading, setloading] = useState(true)
    const components = [
        { label: 'Buy Gold', image: 'bank',screen:'Home',touch:'https://rzp.io/l/q7O9TDNw1' },
        { label: 'Live price', image: 'balance-scale',screen:'Live' },
    ]
    useEffect(() => {
        firestore().collection('Bracelet').get().then((e) => {
            setData(e.docs.map(doc => doc.data()))
        })
        axios.get('https://www.metals-api.com/api/latest?access_key=96m7fvel46nopqhmybqx2672m79on1b76fm3440brq3bxpej8s87v24sbab8&base=INR&symbols=XAU')
        .then((res)=>{
            let perounce=res.data.rates.XAU
            let price=parseInt(perounce)
            price=parseInt(price/31)
            price=parseInt(price+price*0.13)
            setPrice(price)
        })
        .catch(e=>console.log(e))
    }, [props.navigation])
    const images = []
    {
        data.map(item => {
            images.push(item.image_url)
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <View style={{ width: '100%', height: 180, margin: 10 }}>
                    <SliderBox
                        images={images}
                        sliderBoxHeight={180}
                        autoPlay
                        circleLoop
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: 0,
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                        }}
                        ImageComponentStyle={{ borderRadius: 20, width: '97%' }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: "rgba(128, 128, 128, 0.92)"
                        }}
                    />
                </View>
            </View>
            <View style={styles.bottomView}>
                <ScrollView contentContainerStyle={{width:'100%',alignItems: 'center',overflow:'hidden'}} showsVerticalScrollIndicator={false}>
                    <View style={{ width: '86%', marginTop: 40, elevation: 5, height: 60, backgroundColor: '#fff', borderRadius: 20, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                        {components.map(item =>
                            <TouchableOpacity key={item.label} 
                            style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }} 
                            onPress={()=>item.touch?Linking.openURL(item.touch):props.navigation.navigate(item.screen)}>
                                <Icon name={item.image} size={18} color={'#C28E39'} />
                                <Text style={{ color: '#000' }}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <Card style={{ width: '100%', elevation: 5, borderRadius: 10, marginTop: 20 }}>
                        <Card.Title
                            title="Gold Price"
                            right={(props) => <Text style={{margin:20,fontWeight: 'bold',fontSize:18}}>{price*10}/10g</Text>}
                        />
                        <Card.Content style={{flexDirection: 'row'}}>
                            {/* <GetGoldPrice/> */}
                            <Paragraph>Powered By: DARSHAN JEWELLER</Paragraph>
                        </Card.Content>
                    </Card>
                    <View style={styles.cards}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, color: '#000' }}>Categories</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Cards props={props} />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C28E39',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    customSlide: {
        width: "100%",
        height: 200
    },
    input: {
        flex: 2,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    item: {
        backgroundColor: "#fff",
        padding: 16,
        margin: 12
    },
    title: {
        fontSize: 24,
        fontFamily: "serif",
        color: "#000",
    },
    topView: {
        width: '100%',
        alignItems: 'center',
    },
    bottomView:
    {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        alignItems: "center",
        marginTop: 20,
        justifyContent: 'space-evenly',
        overflow:'hidden'
    },
    cards: {
        flex: 1,
        width: '86%',
        height: 200,
        marginTop: 30,
    }
})
