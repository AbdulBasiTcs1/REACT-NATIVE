import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function ProductDetails({ route, navigation }) {
  const { item } = route.params;
  const [qty, setQty] = useState(1);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.emojiBox}>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>⭐ {item.rating} / 5.0</Text>
        <Text style={styles.price}>PKR {item.price.toLocaleString()}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        {/* Quantity Selector */}
        <Text style={styles.sectionLabel}>Quantity</Text>
        <View style={styles.qtyRow}>
          <TouchableOpacity style={styles.qtyBtn} onPress={() => setQty(q => Math.max(1, q-1))}>
            <Text style={styles.qtyBtnText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{qty}</Text>
          <TouchableOpacity style={styles.qtyBtn} onPress={() => setQty(q => q+1)}>
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Add to Cart — passes params to Cart screen */}
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => navigation.navigate('Cart', { newItem: { ...item, qty } })}
        >
          <Text style={styles.cartBtnText}>Add to Cart — PKR {(item.price * qty).toLocaleString()}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: '#F0F4F8' },
  emojiBox:     { backgroundColor: '#fff', alignItems: 'center', padding: 40 },
  emoji:        { fontSize: 90 },
  body:         { padding: 20 },
  name:         { fontSize: 26, fontWeight: 'bold', color: '#1F4E79' },
  rating:       { fontSize: 16, color: '#F39C12', marginTop: 4 },
  price:        { fontSize: 22, color: '#27AE60', fontWeight: 'bold', marginTop: 8 },
  desc:         { fontSize: 14, color: '#555', marginTop: 14, lineHeight: 22 },
  sectionLabel: { fontSize: 15, fontWeight: 'bold', color: '#333', marginTop: 20 },
  qtyRow:       { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  qtyBtn:       { backgroundColor: '#2E75B6', borderRadius: 8, paddingHorizontal: 16,
                  paddingVertical: 8 },
  qtyBtnText:   { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  qtyText:      { fontSize: 20, marginHorizontal: 20, fontWeight: 'bold', color: '#333' },
  cartBtn:      { backgroundColor: '#1F4E79', borderRadius: 12, padding: 16,
                  alignItems: 'center', marginTop: 24 },
  cartBtnText:  { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});