import React,{useState} from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
const Cards = ({props}) => {
    const [firstTime,setFirstTime] = useState(true)
    const list=[
        {name:'Rings',image:"https://e7.pngegg.com/pngimages/319/408/png-clipart-jewellery-wedding-ring-gold-diamond-ring-love-gemstone.png",route:'Rings'},
        {name:'Bracelet',image:"https://assets.ajio.com/medias/sys_master/root/20201111/B0wM/5faae225f997dd8c83941325/-1117Wx1400H-461582640-gold-MODEL.jpg",route:'Bracelet'},
        {name:'Chains',image:"https://e7.pngegg.com/pngimages/362/642/png-clipart-gold-colored-chain-necklace-illustration-earring-necklace-jewellery-fashion-accessory-gold-necklace-gemstone-pendant-thumbnail.png",route:'Chain'},
        {name:'Necklace',image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmYyxLTAx7-J9fMsgt4lw7LNE-8RIdVu6DQ&usqp=CAU",route:'Necklace'},
        {name:'Bangles',image:"https://i.pinimg.com/originals/fb/32/28/fb3228518a6470dc2d387e6a57c41dcd.jpg",route:'Bangles'},
        {name:'Lockets',image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCe87gNk4j3xlahWz2CssDnuigbQx40efQzK55wK3Km894BQ2QFLMq0GkwIK5bUFAqDw8&usqp=CAU",route:'Lockets'},
    ]

    const handleClick=(item)=>{
        if(firstTime){
            props.navigation.navigate('Products',{initialRoute:item.route})
setFirstTime(false)
        }
            else
            props.navigation.navigate('Item',{collection:item.route})
    }
    
    return (
        <View style={{flexDirection: 'row'}}>
        {list.map(item=>
            <TouchableOpacity key={item.name} style={styles.cont} onPress={()=>handleClick(item)}>
                <Text style={{color:'white',fontWeight:'bold',textTransform:'uppercase'}}>{item.name}</Text>
                <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius: 100}}/>
            </TouchableOpacity>
        )}
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    cont:{
        height:100,
        width:100,
        backgroundColor:'#BA904A',
        borderRadius:10,
        marginRight:10,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})
