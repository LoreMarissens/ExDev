import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import BusTrips from './screens/BusTrips';
import InfoDetail from './screens/InfoDetail';
import Winkelwagen from './screens/Winkelwagen';
import Uno from './screens/Uno';
import Rummikub from './screens/Rummikub';
import Qwirkle from './screens/Qwirkle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Games for you" component={(BusTrips)} />
        <Stack.Screen name="Info" component={(InfoDetail)} />
        <Stack.Screen name="Winkelwagen" component={(Winkelwagen)} />
        <Stack.Screen name="Uno" component={(Uno)} />
        <Stack.Screen name="Rummikub" component={(Rummikub)} />
        <Stack.Screen name="Qwirkle" component={(Qwirkle)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}