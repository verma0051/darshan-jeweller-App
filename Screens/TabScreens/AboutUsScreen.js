import React from 'react'
import { Image, StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Card } from 'react-native-element'
import {
    Button
} from 'react-native-paper';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutUsScreen() {
    const adminList = [
        { role: 'Founder', image: 'https://firebasestorage.googleapis.com/v0/b/darshan-jewellers-a076c.appspot.com/o/Shop%20details%2FIMG_4514.jpg?alt=media&token=9e8c4ecb-7169-45ca-ad9f-33956b416cdd' },
        { role: 'Owner', image: 'https://firebasestorage.googleapis.com/v0/b/darshan-jewellers-a076c.appspot.com/o/Shop%20details%2F20190417204845_IMG_1297_Original_Original.jpg?alt=media&token=85be8f5f-3533-435d-be4d-011643e9b1c3' },
        { role: 'Co-Owner', image: 'https://firebasestorage.googleapis.com/v0/b/darshan-jewellers-a076c.appspot.com/o/Shop%20details%2F9A234A08-1365-42A8-8B3B-AEB6A304CDE6_Original.jpg?alt=media&token=7c29b191-afa9-4dcf-9305-2a2db52ccf42' },
    ]
    return (
        <SafeAreaView style={styles.container}>
            {/* <Text style={{ fontWeight: 'bold', fontSize: 30, textTransform: 'uppercase', color: '#fff', margin: 20 }}>ABOUT US</Text> */}
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ ...styles.heading}}>Darshan Jewellers (ਖੁਰਦ ਵਾਲੇ)</Text>
                    <Text>Since 1952</Text>
                    <View>
                        <Text style={{ textAlign: 'justify', fontSize: 16, padding: 15, color: '#fff',fontWeight: 'bold'}}>
                            Weddings are a deep-rooted element of our society, and Indian brides are known as symbols of beauty, pride and elegance.
                            India is a vast country with different customs and traditions practiced even within the same state.
                            Darshan Jewellers
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginTop: 5 }}>
                        <View style={{ padding: 20, alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                            {adminList.map(item =>
                                <View key={item.role} style={{ alignItems: 'center', margin: 5 }}>
                                    <Image style={styles.img} source={{ uri: item.image }} />
                                    <Text style={{ color: '#fff',fontWeight:'bold', marginTop: 5,textTransform:'uppercase' }}>{item.role}</Text>
                                </View>)}
                        </View>
                    </View>

                    
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/place/Darshan+Jewellers+(%E0%A8%96%E0%A9%81%E0%A8%B0%E0%A8%A6+%E0%A8%B5%E0%A8%BE%E0%A8%B2%E0%A9%87)/@30.6819236,75.8263287,17z/data=!3m1!4b1!4m5!3m4!1s0x39107b40f206cc95:0x6c8119c63f06b34e!8m2!3d30.6819104!4d75.828471')}>
                        <View style={{ textAlign: 'justify', fontSize: 14, padding: 15, color: '#000', }}>
                            <Image style={styles.map} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/darshan-jewellers-a076c.appspot.com/o/Shop%20details%2FB6A40CA8-AD80-4526-BB36-1EAC8D2DB4EE.png?alt=media&token=de425a2b-6f5f-48e6-9bbe-064746be1d74" }} />
                            <Button
                                onPress={() => Linking.openURL('https://www.google.com/maps/place/Darshan+Jewellers+(%E0%A8%96%E0%A9%81%E0%A8%B0%E0%A8%A6+%E0%A8%B5%E0%A8%BE%E0%A8%B2%E0%A9%87)/@30.6819236,75.8263287,17z/data=!3m1!4b1!4m5!3m4!1s0x39107b40f206cc95:0x6c8119c63f06b34e!8m2!3d30.6819104!4d75.828471')}
                                labelStyle={{ color: '#fff', letterSpacing: 1 }}
                                style={{ marginVertical: 10, backgroundColor: '#5cb85c' }}
                                mode='contained'
                            >
                                Way to Shop
                            </Button>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C38F3A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        height: 300,
        width: Dimensions.get('window').width - 40,
        paddingHorizontal: 10,
        borderRadius: 12

    },
    heading: {
        fontSize: 24,
        color: "#fff",
        marginBottom: 12
    },
    textStyle: {
        padding: 10,
        fontSize: 16,
        color: "#000",
        marginBottom: 12
    },
    introCard:{
        borderRadius: 30,
        borderWidth:1
    },
    myBackground: {
        backgroundColor: '#fae',
        fontSize: 24,
        marginBottom: 20
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20
    },
    item: {
        backgroundColor: "#fff",
        padding: 16,
        margin: 12
    },
    title: {
        fontSize: 16,
        color: "#f00"
    },
    subTitle: {
        fontSize: 12,
    },
    img: {
        borderRadius: 100,
        margin:6,
        width: 130,
        height: 130,
    },
    father: {
        marginTop: "5%",
        padding: "2%",
        marginRight: 200
    },
    verma: {
        marginLeft: 200,
        marginTop: -100
    }
})
