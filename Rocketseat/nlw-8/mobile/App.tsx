import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Widget from './src/components/Widget';
import { theme } from './src/theme';

import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import LottieView from 'lottie-react-native';

export default function App() {

  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoader) {
    return (
      <LottieView
        style={{
          flex: 1
        }}
        source={require('./assets/splash.json')}
        autoPlay
        loop
      />
    )
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>
      
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />

      <Widget />
    </View>
  );
}
