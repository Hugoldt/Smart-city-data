import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './heartsafe/screens/HomeScreen';
import MapScreen from './heartsafe/screens/MapScreen';
// import DetailScreen from './heartsafe/screens/DetailScreen';
import ReportScreen from './heartsafe/screens/ReportScreen';
import HelpScreen from './heartsafe/screens/HelpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        id={undefined}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        {<Stack.Screen name="Map"    component={MapScreen} />}
        {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
        {<Stack.Screen name="Report" component={ReportScreen} /> }
        {<Stack.Screen name="Help"   component={HelpScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
