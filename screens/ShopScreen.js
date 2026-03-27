import React from 'react';
import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

export const ITEMS = [
  { id: '1', name: 'Sneakers',    price: 3500, emoji: '👟',
    desc: 'Comfortable daily sneakers for all occasions.', rating: 4.5 },
  { id: '2', name: 'Sunglasses',  price: 1800, emoji: '🕶️',
    desc: 'Stylish UV-protected sunglasses.',             rating: 4.2 },
  { id: '3', name: 'Backpack',    price: 2700, emoji: '🎒',
    desc: '30L waterproof travel backpack.',              rating: 4.7 },
  { id: '4', name: 'Headphones',  price: 4200, emoji: '🎧',
    desc: 'Wireless noise-cancelling headphones.',        rating: 4.8 },
  { id: '5', name: 'Watch',       price: 6500, emoji: '⌚',
    desc: 'Classic analog watch with leather strap.',     rating: 4.6 },
];

export default function ShopScreen({ navigation }) {
  return (
    <FlatList
      data={ITEMS}
      keyExtractor={i => i.id}
      numColumns={2}
      contentContainerStyle={{ padding: 12 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ProductDetails', { item })}
        >
          <Text style={styles.emoji}>{item.emoji}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>PKR {item.price.toLocaleString()}</Text>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card:  { flex: 1, backgroundColor: '#fff', borderRadius: 12, margin: 6,
           padding: 14, alignItems: 'center', elevation: 2 },
  emoji: { fontSize: 44, marginBottom: 8 },
  name:  { fontSize: 15, fontWeight: 'bold', color: '#1F4E79' },
  price: { fontSize: 14, color: '#2E75B6', marginTop: 4, fontWeight: '600' },
  rating:{ fontSize: 13, color: '#F39C12', marginTop: 2 },
});