import {React} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/navigation';

export default function App() {
  return (
    <View>
      <Navigation/>
    </View>
  );
}
