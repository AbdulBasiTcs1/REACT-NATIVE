import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const PostAPI =  () => {
   const[id,setId]= useState('');
 const[title,setTitle]= useState('');
const handleSave= async()=>{
  const url="http://localhost:3000/users2";

  const requestData = {
        id: parseInt(id),
        title: title
        
      };

       const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();
      console.log('Response:', data);

}

  return (
    <View>
      <Text>PostAPI</Text>
      <TextInput  value={id} placeholder='please enter id' onChangeText={setId} />
      <TextInput  value={title} placeholder='please enter title' onChangeText={setTitle} />
      <Button title='save' onPress={handleSave} />
    </View>
  )
}

export default PostAPI