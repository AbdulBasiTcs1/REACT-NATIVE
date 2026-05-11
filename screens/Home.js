import { View, Text,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
     <Button title='GET API' onPress={()=>{navigation.navigate('getapi')}}  />
       <Button title='POST API' onPress={()=>{navigation.navigate('postapi')}}  />
    </View>
  )
}

export default Home