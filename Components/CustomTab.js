import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { clockRunning } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomTab({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row',backgroundColor:"#F4AF5F",height:50,borderRadius:50,justifyContent:"center",alignItems:"center" }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          {/* const {tabBarIcon}=options.tabBarIcon */}
          const tabBarIcon=descriptors[route.key].options.tabBarIcon;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
            key={options.tabBarTestID}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems:"center" }}
            >
            
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

const styles = StyleSheet.create({})
