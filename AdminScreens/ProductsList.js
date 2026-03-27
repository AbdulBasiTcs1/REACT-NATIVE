import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PRODUCTS = [
  { id: '1', name: 'Wireless Headphones', price: 4500, category: 'Electronics',
    stock: 30, description: 'High-quality noise-cancelling wireless headphones.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300' },
  { id: '2', name: 'Running Shoes', price: 3200, category: 'Footwear',
    stock: 50, description: 'Lightweight shoes designed for long-distance running.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300' },
  { id: '3', name: 'Smart Watch', price: 8900, category: 'Electronics',
    stock: 15, description: 'Feature-packed smartwatch with health monitoring.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300' },
  { id: '4', name: 'Leather Wallet', price: 1200, category: 'Accessories',
    stock: 80, description: 'Genuine leather bifold wallet with card slots.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300' },
  { id: '5', name: 'Backpack', price: 2800, category: 'Bags',
    stock: 40, description: 'Durable 30L backpack for travel and daily use.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300' },
];

export default function ProductsList({ navigation }) {
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ProductDetails', { product: item })}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.price}>PKR {item.price.toLocaleString()}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list:     { padding: 16 },
  card:     { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12,
              marginBottom: 14, overflow: 'hidden', elevation: 3 },
  image:    { width: 90, height: 90 },
  info:     { flex: 1, padding: 12, justifyContent: 'center' },
  name:     { fontSize: 16, fontWeight: 'bold', color: '#1F4E79' },
  category: { fontSize: 13, color: '#888', marginTop: 2 },
  price:    { fontSize: 15, color: '#2E75B6', marginTop: 4, fontWeight: '600' },
});