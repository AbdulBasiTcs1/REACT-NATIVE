/**
 * Storage Utility
 * ---------------
 * Lab Task 1 → useSecureStore = false  → AsyncStorage
 * Lab Task 2 → useSecureStore = true   → expo-secure-store
 *
 * Just flip the flag below to switch between them.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

// ✅ Change to `true` for Lab Task 2 (SecureStore)
const USE_SECURE_STORE = false;

export const saveUser = async (email, username, password) => {
  const userData = JSON.stringify({ email, username, password });
  if (USE_SECURE_STORE) {
    await SecureStore.setItemAsync('userData', userData);
  } else {
    await AsyncStorage.setItem('userData', userData);
  }
};

export const getUser = async () => {
  let data = null;
  if (USE_SECURE_STORE) {
    data = await SecureStore.getItemAsync('userData');
  } else {
    data = await AsyncStorage.getItem('userData');
  }
  return data ? JSON.parse(data) : null;
};
