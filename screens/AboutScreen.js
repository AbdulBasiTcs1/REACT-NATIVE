import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function AboutScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.emoji}>ℹ️</Text>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.sub}>React Native Shopping App v1.0</Text>
      <Text style={styles.sub}>Built with React Navigation 6</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0F4F8' },
  emoji:  { fontSize: 60, marginBottom: 12 },
  title:  { fontSize: 22, fontWeight: 'bold', color: '#1F4E79' },
  sub:    { fontSize: 14, color: '#888', marginTop: 6 },
});