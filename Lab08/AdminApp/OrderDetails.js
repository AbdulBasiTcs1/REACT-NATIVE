import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const OrderDetails = ({ route, navigation }) => {
  const { order } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: `Order ${order.id}` });
  }, [order, navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderId}>{order.id}</Text>
        <Text style={styles.productName}>{order.productName}</Text>
      </View>
      
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Customer:</Text>
          <Text style={styles.value}>{order.customer}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Order Date:</Text>
          <Text style={styles.value}>{order.date}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Total Price:</Text>
          <Text style={styles.value}>{order.price}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Shipping Status:</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
            <Text style={styles.statusText}>{order.status}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Shipped': return '#17a2b8';
    case 'Processing': return '#ffc107';
    case 'Delivered': return '#28a745';
    default: return '#6c757d';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 30,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  infoSection: {
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
  },
  value: {
    fontSize: 16,
    color: '#212529',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OrderDetails;
