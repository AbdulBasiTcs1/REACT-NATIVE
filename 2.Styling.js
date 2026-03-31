import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function App() {
  const theme = useColorScheme(); // 'dark' or 'light'

  const isDark = theme === 'dark';

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#000' : '#fff' }
      ]}
    >
      <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
        Hello
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',      // horizontal center
    justifyContent: 'center',  // vertical center
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});