import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ORDERS = [
  { id: 'ORD-001', product: 'Wireless Headphones', price: 4500, status: 'Delivered',
    customer: 'Ali Hassan', address: 'House 5, Block A, Lahore',
    date: '2024-01-15', shipping: 'Pakistan Post', payment: 'Cash on Delivery' },
  { id: 'ORD-002', product: 'Running Shoes', price: 3200, status: 'Shipped',
    customer: 'Fatima Malik', address: 'Flat 12, F-7, Islamabad',
    date: '2024-01-18', shipping: 'TCS Courier', payment: 'JazzCash' },
  { id: 'ORD-003', product: 'Smart Watch', price: 8900, status: 'Processing',
    customer: 'Hamza Qureshi', address: 'Plot 22, Karachi',
    date: '2024-01-20', shipping: 'Leopards Courier', payment: 'EasyPaisa' },
  { id: 'ORD-004', product: 'Leather Wallet', price: 1200, status: 'Pending',
    customer: 'Zara Iqbal', address: 'Street 8, Faisalabad',
    date: '2024-01-21', shipping: 'BlueEx', payment: 'Bank Transfer' },
  { id: 'ORD-005', product: 'Backpack', price: 2800, status: 'Delivered',
    customer: 'Omar Sheikh', address: 'DHA Phase 6, Lahore',
    date: '2024-01-22', shipping: 'TCS Courier', payment: 'Cash on Delivery' },
];

const STATUS_COLORS = {
  Delivered: '#27AE60', Shipped: '#2E75B6',
  Processing: '#F39C12', Pending: '#E74C3C',
};

export default function OrdersList({ navigation }) {
  return (
    <FlatList
      data={ORDERS}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('OrderDetails', { order: item })}
        >
          <View style={styles.top}>
            <Text style={styles.orderId}>{item.id}</Text>
            <View style={[styles.badge, { backgroundColor: STATUS_COLORS[item.status] }]}>
              <Text style={styles.badgeText}>{item.status}</Text>
            </View>
          </View>
          <Text style={styles.product}>{item.product}</Text>
          <View style={styles.bottom}>
            <Text style={styles.price}>PKR {item.price.toLocaleString()}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list:      { padding: 16 },
  card:      { backgroundColor: '#fff', borderRadius: 12, padding: 14,
               marginBottom: 12, elevation: 2 },
  top:       { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  orderId:   { fontSize: 15, fontWeight: 'bold', color: '#1F4E79' },
  badge:     { borderRadius: 8, paddingHorizontal: 10, paddingVertical: 3 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  product:   { fontSize: 14, color: '#444', marginTop: 6 },
  bottom:    { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  price:     { fontSize: 15, color: '#2E75B6', fontWeight: 'bold' },
  date:      { fontSize: 12, color: '#999' },
});