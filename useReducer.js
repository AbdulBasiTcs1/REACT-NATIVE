import React, { useReducer } from 'react';
import { Text, View, Button } from 'react-native';

const initialState = {
  count: 0,
  name: "Shreyar"
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      const newCount = state.count + 1;
      return {
        ...state,
        count: newCount,
        // Update the name to "Zeeshan" if the new count is 5
        name: newCount === 5 ? "Zeeshan" : state.name
      };
    }
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={{ margin: 30 }}>
      <Text> {state.count} </Text>
      <Text> {state.name} </Text>
      <Button title="Add" onPress={() => dispatch({ type: 'increment' })} />
    </View>
  );
}
