import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomePage } from './srs/homepage';
import { Navbar } from './srs/Navbar';
export default function App() {
  return (
    <View style={styles.container}>
    <Navbar/>
   <HomePage/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',

    color: 'white',
  },

  but: {

  },

  text: {
    color: 'white',
  }
});
