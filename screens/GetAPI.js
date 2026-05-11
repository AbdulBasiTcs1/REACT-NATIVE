import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const GetAPI = () => {
  const [apidata, setapidata] = useState([]);
  const mygetapi = async () => {
    const url = "http://localhost:3000/users2";
    const data = await fetch(url);
    let result = await data.json();
    setapidata(result);
  }

  useEffect(() => {
    mygetapi();
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList data={apidata}
          renderItem={({ item }) => {
            return (
              <View style={{ borderBottomWidth: 2, borderBottomColor: '#e60e0e' }}>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
              </View>
            )
          }}
        />
      </ScrollView>
    </View>
  )
}

export default GetAPI