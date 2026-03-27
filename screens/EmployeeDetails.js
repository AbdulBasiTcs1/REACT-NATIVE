import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function EmployeeDetails({ route }) {
  const { employee } = route.params;
  const Row = ({ label, value }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{employee.name[0]}</Text>
        </View>
        <Text style={styles.name}>{employee.name}</Text>
        <Text style={styles.desg}>{employee.designation}</Text>
      </View>
      <View style={styles.card}>
        <Row label='Department'  value={employee.department} />
        <Row label='Email'       value={employee.email} />
        <Row label='Phone'       value={employee.phone} />
        <Row label='Joined'      value={employee.joined} />
        <Row label='Salary'      value={`PKR ${employee.salary.toLocaleString()}/mo`} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, backgroundColor: '#F0F4F8' },
  header:     { alignItems: 'center', padding: 30, backgroundColor: '#1F4E79' },
  avatar:     { width: 80, height: 80, borderRadius: 40, backgroundColor: '#2E75B6',
                alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  avatarText: { color: '#fff', fontSize: 34, fontWeight: 'bold' },
  name:       { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  desg:       { color: '#ADD8E6', fontSize: 15, marginTop: 4 },
  card:       { backgroundColor: '#fff', margin: 16, borderRadius: 12, padding: 16, elevation: 2 },
  row:        { flexDirection: 'row', justifyContent: 'space-between',
                paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EEE' },
  label:      { fontSize: 14, color: '#888', fontWeight: '600' },
  value:      { fontSize: 14, color: '#333', maxWidth: '60%', textAlign: 'right' },
});