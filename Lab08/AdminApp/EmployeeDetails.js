import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EmployeeDetails = ({ route, navigation }) => {
  const { employee } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: employee.name });
  }, [employee, navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{employee.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{employee.name}</Text>
        <Text style={styles.designation}>{employee.designation}</Text>
      </View>
      
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{employee.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{employee.phone}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f8f9fa',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  designation: {
    fontSize: 18,
    color: '#6c757d',
    marginTop: 5,
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
});

export default EmployeeDetails;
