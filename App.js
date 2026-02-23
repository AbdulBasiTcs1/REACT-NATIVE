import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.wrapper}>
    <View style={styles.box1}>
      <Text >This is Header of the App</Text>
    </View>
    <View style={styles.box2}>
      <Text>This is the Footer of the App</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'lightblue',
    flex :1,
    justifyContent:'center',
    textAlign:'center'
  },
  box1:{
    backgroundColor:'white',
    flex:2,
    justifyContent:'center',
    textAlign:'center'
  },
  box2:{
    backgroundColor:'pink',
    flex:3,
    justifyContent:'center',
    textAlign:'center'
  }
});
