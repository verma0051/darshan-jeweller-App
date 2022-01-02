import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth'


export default function RegisterScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                navigation.replace("Home")
                alert("User created ")
            })
            .catch((e)=>alert(e.message))
    }
    return (
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxyeXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" }} style={styles.cont}>
        <View style={styles.cont}>
        <Text style={{fontSize:23,color:'white',fontWeight:'bold',textTransform:'uppercase',letterSpacing:2,marginBottom:30}}>Register Here</Text>
            <TextInput
                style={styles.input}
                label="Email"
                underlineColor='white'
                theme={{colors:{primary:'#fff',text:'#fff',placeholder:'#fff'}}}
                dense
                onChangeText={(e) => setEmail(e)}
            />
            <TextInput
                label="Password"
                style={styles.input}
                underlineColor='white'
                dense
                theme={{colors:{primary:'#fff',text:'#fff',placeholder:'#fff'}}}
                onChangeText={(e) => setPassword(e)}
            />
            <Button mode="contained" style={styles.btn} onPress={register} disabled={!email || !password}>
                Register
            </Button>
            <View style={styles.registerView}>
                    <Text style={styles.text}>Already a  User ....?</Text>
                    <Button mode="text" color="#FFF200" labelStyle={{ textTransform: 'capitalize' }} onPress={() => navigation.navigate('Signin')}>
                    Login
                </Button>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cont: {
        width: "100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0,0.8)"
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        height:60,
        backgroundColor:'transparent',
        borderRadius: 10,
        margin:5
    },
    registerView: {
        width: '100%',
        margin: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn:{
        color: "#fff",
        borderRadius: 10,
        backgroundColor:'white',
        marginTop:30,
        width:'60%',
        height:40
    }
})
