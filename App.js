import React from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, Image, ScrollView, Button, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';

// function HomeScreen() {
//   return (
//     <View style={styles.screenContainer}>
//       <Text style={styles.screenTitle}>Home Screen</Text>
//       {/* Additional content for Home Screen */}
//     </View>
//   );
// }

function AnotherScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Another Screen</Text>
      {/* Additional content for Another Screen */}
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Another" component={AnotherScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



