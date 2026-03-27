import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ORDERS } from './data';

const OrdersList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => navigation.navigate('OrderDetails', { order: item })}
    >
      <View style={styles.idBadge}>
        <Text style={styles.idText}>{item.id}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Shipped': return '#17a2b8';
      case 'Processing': return '#ffc107';
      case 'Delivered': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
  },
  idBadge: {
    backgroundColor: '#e9ecef',
    padding: 8,
    borderRadius: 5,
    marginRight: 12,
  },
  idText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#495057',
  },
  info: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: '#6c757d',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OrdersList;
