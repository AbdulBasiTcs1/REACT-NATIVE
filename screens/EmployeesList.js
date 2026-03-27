import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const EMPLOYEES = [
  { id: '1', name: 'Ahmed Raza',    designation: 'Store Manager',
    email: 'ahmed@store.com',  phone: '0300-1234567', department: 'Management',
    joined: 'Jan 2020', salary: 85000 },
  { id: '2', name: 'Sara Khan',     designation: 'Sales Executive',
    email: 'sara@store.com',   phone: '0301-2345678', department: 'Sales',
    joined: 'Mar 2021', salary: 45000 },
  { id: '3', name: 'Bilal Hassan',  designation: 'Warehouse Lead',
    email: 'bilal@store.com',  phone: '0302-3456789', department: 'Warehouse',
    joined: 'Jun 2019', salary: 55000 },
  { id: '4', name: 'Nida Farooq',   designation: 'Customer Support',
    email: 'nida@store.com',   phone: '0303-4567890', department: 'Support',
    joined: 'Sep 2022', salary: 40000 },
  { id: '5', name: 'Usman Tariq',   designation: 'IT Administrator',
    email: 'usman@store.com',  phone: '0304-5678901', department: 'IT',
    joined: 'Feb 2018', salary: 70000 },
];

export default function EmployeesList({ navigation }) {
  return (
    <FlatList
      data={EMPLOYEES}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('EmployeeDetails', { employee: item })}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{item.name[0]}</Text>
          </View>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desg}>{item.designation}</Text>
            <Text style={styles.dept}>{item.department}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list:       { padding: 16 },
  card:       { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                borderRadius: 12, padding: 14, marginBottom: 12, elevation: 2 },
  avatar:     { width: 52, height: 52, borderRadius: 26, backgroundColor: '#2E75B6',
                alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  avatarText: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  name:       { fontSize: 16, fontWeight: 'bold', color: '#1F4E79' },
  desg:       { fontSize: 13, color: '#555', marginTop: 2 },
  dept:       { fontSize: 12, color: '#2E75B6', marginTop: 1 },
});