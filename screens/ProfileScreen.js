import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarEmoji}>👤</Text>
        </View>
        <Text style={styles.name}>ABDUL BASI</Text>
        <Text style={styles.email}>SP24-BCS-033</Text>
      </View>

      <View style={styles.infoSection}>
        <TouchableOpacity style={styles.infoItem}>
          <Text style={styles.infoLabel}>My Orders</Text>
          <Text style={styles.infoArrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoItem}>
          <Text style={styles.infoLabel}>Settings</Text>
          <Text style={styles.infoArrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoItem}>
          <Text style={styles.infoLabel}>Help & Support</Text>
          <Text style={styles.infoArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  header: {
    backgroundColor: '#1F4E79',
    padding: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarEmoji: {
    fontSize: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 5,
  },
  infoSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
  },
  infoArrow: {
    fontSize: 24,
    color: '#ccc',
  },
  logoutButton: {
    margin: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e74c3c',
  },
  logoutText: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
