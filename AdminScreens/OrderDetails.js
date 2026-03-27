import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const STATUS_COLORS = {
  Delivered: '#27AE60', Shipped: '#2E75B6',
  Processing: '#F39C12', Pending: '#E74C3C',
};

export default function OrderDetails({ route }) {
  const { order } = route.params;
  const Row = ({ label, value }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.statusBanner, { backgroundColor: STATUS_COLORS[order.status] }]}>
        <Text style={styles.statusText}>{order.status}</Text>
        <Text style={styles.orderId}>{order.id}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Product Information</Text>
        <Row label='Product' value={order.product} />
        <Row label='Price'   value={`PKR ${order.price.toLocaleString()}`} />
        <Text style={styles.sectionTitle}>Customer Information</Text>
        <Row label='Customer' value={order.customer} />
        <Row label='Address'  value={order.address} />
        <Text style={styles.sectionTitle}>Shipping Information</Text>
        <Row label='Order Date'  value={order.date} />
        <Row label='Courier'     value={order.shipping} />
        <Row label='Payment'     value={order.payment} />
        <Row label='Status'      value={order.status} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:     { flex: 1, backgroundColor: '#F0F4F8' },
  statusBanner:  { padding: 24, alignItems: 'center' },
  statusText:    { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  orderId:       { color: 'rgba(255,255,255,0.85)', fontSize: 14, marginTop: 4 },
  card:          { backgroundColor: '#fff', margin: 16, borderRadius: 12,
                   padding: 16, elevation: 2 },
  sectionTitle:  { fontSize: 15, fontWeight: 'bold', color: '#1F4E79',
                   marginTop: 14, marginBottom: 6, borderBottomWidth: 1,
                   borderBottomColor: '#EEE', paddingBottom: 4 },
  row:           { flexDirection: 'row', justifyContent: 'space-between',
                   paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  label:         { fontSize: 13, color: '#888', fontWeight: '600' },
  value:         { fontSize: 13, color: '#333', maxWidth: '55%', textAlign: 'right' },
});