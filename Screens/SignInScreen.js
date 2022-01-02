import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                navigation.replace("Home")
                console.log(res, "User logged in")
            })
            .catch(() => {
                alert("Invalid Credentials")
            })
    }
    return (
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxyeXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" }} style={styles.cont}>
            <View style={styles.cont}>
                <Text style={styles.title}>DARSHAN JEWELLERS</Text>
                <View style={{width:'100%',alignItems: 'center'}}>
                <TextInput
                    style={styles.input}
                    label="Email"
                    theme={{colors:{primary:'#fff',text:'#fff',placeholder:'#fff'}}}
                    dense
                    underlineColor='white'
                    onChangeText={(e) => setEmail(e)}
                />
                <TextInput
                    label="Password"
                    labelStyle={{color:'#fff'}}
                    style={styles.input}
                    theme={{colors:{primary:'#fff',text:'#fff',placeholder:'#fff'}}}
                    underlineColor='white'
                    secureTextEntry
                    dense
                    onChangeText={(e) => setPassword(e)}
                />
                </View>
                <Button style={styles.button} mode="contained" color="#FFF200" onPress={login} disabled={!email || !password}>
                    Login
                </Button>
                <View style={styles.registerView}>
                    <Text style={styles.text}>Not a User ?</Text>
                    <Button mode="text" color="#FFF200" labelStyle={{ textTransform: 'capitalize' }} onPress={() => navigation.navigate('Register')}>
                        Register here
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
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        padding: 20,
        color: '#fff',
        letterSpacing:2,
        marginBottom:40,
        fontWeight: 'bold',
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
    button: {
        color: "#fff",
        borderRadius: 10,
        backgroundColor:'white',
        marginTop:30,
        width:'60%',
        height:40
    }
})
