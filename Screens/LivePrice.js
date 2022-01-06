import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import te from 'tradingeconomics'

const LivePrice = ({ navigation }) => {
    const [price, setPrice] = useState(null)
    useEffect(() => {

        // te.login('h2o67dy6otxxdzw:gpuqjykfl2d6t8w');



        // data = te.getMarketSnap(marketsField = 'commodities').then(function(data){
        //     console.log(data)     
        // }); 
        axios.get('https://www.metals-api.com/api/latest?access_key=96m7fvel46nopqhmybqx2672m79on1b76fm3440brq3bxpej8s87v24sbab8&base=INR&symbols=XAU')
        .then((res)=>{
            let perounce=res.data.rates.XAU
            let price=parseInt(perounce)
            price=parseInt(price/31)
            price=parseInt(price+price*0.13)
            setPrice(price)
        })
        .catch(e=>console.log(e))
    }, [navigation])
    return (
        <SafeAreaView style={styles.cont}>
        <View style={{width:'90%',backgroundColor:'#fff',elevation:10,borderRadius:20,padding:10,flexDirection: 'row',alignItems: 'center',justifyContent:'space-evenly',margin:20}}>
            <Text style={{fontSize:30,color:'#000'}}>Gold Price /1g</Text>
            <Text style={{fontWeight:'bold'}}>{price}</Text>
        </View>
        <View style={{width:'90%',backgroundColor:'#fff',elevation:10,borderRadius:20,padding:10,flexDirection: 'row',alignItems: 'center',justifyContent:'space-evenly'}}>
            <Text style={{fontSize:30,color:'#000'}}>Gold Price /10g</Text>
            <Text style={{fontWeight:'bold'}}>{price*10}</Text>
        </View>
        </SafeAreaView>
    )
}

export default LivePrice

const styles = StyleSheet.create({
    cont:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C38F3A',
    }
})
