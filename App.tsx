/* eslint-disable prettier/prettier */
import React from 'react';

import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{}}>
        <Text style={{}}>Welcome to the React-native journey</Text>
      </View>
    </SafeAreaView>
  );
}


export default App;
