import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer({ children }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#004d40',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});