import { StyleSheet, Text, View } from 'react-native';
import Home from './App/Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './App/Navigations/HomeNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeNavigator/>
      </NavigationContainer>
      {/* <Home/> */}
      <StatusBar style="light" />
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40,
    padding:20
  },
});
