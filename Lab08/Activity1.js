import * as React from 'react'; 
import { View, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
 
function HomeScreen() { 
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
      <Text>Home Screen</Text> 
    </View> 
  ); 
} 
 
const Stack = createNativeStackNavigator(); 
 
function Activity1() { 
  return ( 
    <NavigationContainer independent={true}> 
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={HomeScreen} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
} 

export default Activity1; 
