import React,{useEffect,useState} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ItemList from '../DrawerScreens/ItemList';
import DrawerContent from '../DrawerContent';
const Drawer = createDrawerNavigator();

export default function ProductsScreen({route,navigation}) {
    const [collection ,setCollection] = useState(route.params?.initialRoute)
useEffect(()=>{
    route.params?.initialRoute && setCollection(route.params?.initialRoute)
},[route])
    return (
        <Drawer.Navigator 
            screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#fff',
                        width: 180,
                    },
                }}
            drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Item"  component={ItemList}  initialParams={{ collection:collection?collection:"Bangles" }}/>
        </Drawer.Navigator>
    )
}