import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function ProductDetails({ route }) {
  const { product } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.badge}>{product.category}</Text>
        <Text style={styles.price}>PKR {product.price.toLocaleString()}</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.text}>{product.description}</Text>
        <Text style={styles.label}>Stock Available</Text>
        <Text style={styles.text}>{product.stock} units</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F8' },
  image:     { width: '100%', height: 260, resizeMode: 'cover' },
  body:      { padding: 20 },
  name:      { fontSize: 24, fontWeight: 'bold', color: '#1F4E79' },
  badge:     { backgroundColor: '#2E75B6', color: '#fff', borderRadius: 8,
               paddingHorizontal: 10, paddingVertical: 3, alignSelf: 'flex-start',
               fontSize: 12, marginTop: 6 },
  price:     { fontSize: 22, color: '#27AE60', fontWeight: 'bold', marginTop: 12 },
  label:     { fontSize: 15, fontWeight: 'bold', color: '#333', marginTop: 18, marginBottom: 4 },
  text:      { fontSize: 14, color: '#555', lineHeight: 22 },
});