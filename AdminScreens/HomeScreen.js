import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const NavButton = ({ label, emoji, screen }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(screen)}
    >
      <Text style={styles.buttonEmoji}>{emoji}</Text>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text style={styles.subtitle}>Online Store Management</Text>
      <NavButton label='Manage Products'  emoji='📦' screen='ProductsList' />
      <NavButton label='Manage Employees' emoji='👥' screen='EmployeesList' />
      <NavButton label='Manage Orders'    emoji='🛒' screen='OrdersList' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:   { flex: 1, alignItems: 'center', justifyContent: 'center',
                 backgroundColor: '#F0F4F8' },
  title:       { fontSize: 28, fontWeight: 'bold', color: '#1F4E79', marginBottom: 6 },
  subtitle:    { fontSize: 14, color: '#666', marginBottom: 36 },
  button:      { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2E75B6',
                 borderRadius: 12, paddingVertical: 16, paddingHorizontal: 30,
                 marginVertical: 10, width: '80%' },
  buttonEmoji: { fontSize: 24, marginRight: 14 },
  buttonText:  { fontSize: 18, color: '#fff', fontWeight: '600' },
});