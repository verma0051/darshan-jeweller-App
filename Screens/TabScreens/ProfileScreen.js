import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ProfileScreen({ navigation }) {
    const [user, setUser] = useState([])

    useEffect(() => {
        setUser(auth().currentUser)
    }, [navigation, user])
    // console.log(user)
    return (
        <SafeAreaView style={styles.container}>
        <Text style={{fontSize:26,fontWeight:'bold',color:'#fff',textTransform:'uppercase'}}>
            user detail
        </Text>
        <View style={{width: '100%',alignItems: 'center',flex:1}}>
            <Icon name='user-circle' size={100} color={"#fff"} style={{ margin: 40 }} />
            <View style={styles.tableView}>
                <DataTable style={{justifyContent: 'space-evenly'}}>
                    <DataTable.Row style={{width:'100%',flexDirection: 'row',height:60}}>
                        <DataTable.Cell style={{...styles.cell}}>Email :-</DataTable.Cell>
                        <DataTable.Cell style={{...styles.cell}}>{user.email}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            <Button mode='contained' labelStyle={{ color: '#C38F3A', fontSize: 20, fontWeight: 'bold' }} style={{ margin: 30, width: '50%', height: 50, alignItems: 'center', justifyContent: 'center',borderRadius:20 }} theme={{ colors: { primary: '#fff' } }} onPress={() => auth().signOut().then(navigation.replace('Splash'))}>Logout</Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C38F3A',
        alignItems: 'center'
    },
    heading: {
        fontSize: 24,
        color: "#000",
        marginBottom: 12
    },
    cell:{
        // marginHorizontal:20,
    },
    tableView: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 30,
    },
    text: {
        color: '#000'
    }
})
