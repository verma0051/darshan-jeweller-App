import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Title, Caption, Drawer, Avatar } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
//import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function DrawerContent(props) {
    const [active, setActive] = useState('Bangles');
    const list = [
        { label: "Necklace", icon: 'life-ring', collection: 'Necklace' },
        { label: "Braclets", icon: 'ra', collection: 'Bracelet' },
        { label: "Bangles", icon: 'circle-o', collection: 'Bangles' },
        { label: "Chain", icon: 'chain', collection: 'Chain' },
        { label: "Rings", icon: 'circle-o-notch', collection: 'Rings' },
        { label: "Lockets", icon: 'mercury', collection: 'Lockets' },
    ]
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <Drawer.Section >
                        {list.map(item =>
                            <DrawerItem
                                style={styles.section}
                                key={item.label}
                                label={item.label}
                                labelStyle={{ fontWeight: "600", fontSize: 15, color: item.label === active ? "#808080" : "#000" }}
                                icon={({ color, size }) => (<Icon name={item.icon} type="ionicon" color="#C28E39" size={14} />)}
                                onPress={() => {
                                    props.navigation.navigate("Item", { collection: item.collection })
                                    setActive(item.label)
                                }}
                            />
                        )}
                    </Drawer.Section>
                </DrawerContentScrollView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    topsec: {
        flexDirection: "row",
        padding: 10
    },
    sectionTitle: {
        fontSize: 20,
        backgroundColor: '#fff',
        elevation: 5
    },
})