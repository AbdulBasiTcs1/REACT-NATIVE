import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartScreen({ route }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (route.params?.newItem) {
      setCartItems(prev => {
        const exists = prev.find(i => i.id === route.params.newItem.id);
        if (exists) {
          return prev.map(i => i.id === route.params.newItem.id
            ? { ...i, qty: i.qty + route.params.newItem.qty } : i);
        }
        return [...prev, route.params.newItem];
      });
    }
  }, [route.params?.newItem]);

  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      {cartItems.length === 0
        ? <Text style={styles.empty}>Your cart is empty 🛒</Text>
        : <>
            <FlatList
              data={cartItems}
              keyExtractor={i => i.id}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Text style={styles.emoji}>{item.emoji}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.qty}>Qty: {item.qty}</Text>
                  </View>
                  <Text style={styles.price}>
                    PKR {(item.price * item.qty).toLocaleString()}
                  </Text>
                </View>
              )}
            />
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalVal}>PKR {total.toLocaleString()}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: '#F0F4F8', padding: 16 },
  title:        { fontSize: 22, fontWeight: 'bold', color: '#1F4E79', marginBottom: 16 },
  empty:        { textAlign: 'center', marginTop: 60, fontSize: 16, color: '#999' },
  row:          { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                  borderRadius: 10, padding: 12, marginBottom: 10, elevation: 1 },
  emoji:        { fontSize: 30, marginRight: 12 },
  name:         { fontSize: 15, fontWeight: 'bold', color: '#333' },
  qty:          { fontSize: 13, color: '#888' },
  price:        { fontSize: 14, fontWeight: 'bold', color: '#2E75B6' },
  totalRow:     { flexDirection: 'row', justifyContent: 'space-between',
                  borderTopWidth: 1, borderTopColor: '#DDD', paddingTop: 12, marginTop: 8 },
  totalLabel:   { fontSize: 18, fontWeight: 'bold', color: '#333' },
  totalVal:     { fontSize: 18, fontWeight: 'bold', color: '#27AE60' },
  checkoutBtn:  { backgroundColor: '#1F4E79', borderRadius: 12, padding: 16,
                  alignItems: 'center', marginTop: 12 },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});