// screens/WishlistScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function WishlistScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.emoji}>❤️</Text>
      <Text style={styles.title}>Wishlist</Text>
      <Text style={styles.sub}>Your saved items will appear here.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0F4F8' },
  emoji:  { fontSize: 60, marginBottom: 12 },
  title:  { fontSize: 22, fontWeight: 'bold', color: '#1F4E79' },
  sub:    { fontSize: 14, color: '#888', marginTop: 6 },
});

// screens/AboutScreen.js

