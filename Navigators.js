import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator }     from '@react-navigation/drawer';
import { TouchableOpacity, Text }    from 'react-native';

import HomeScreen     from './screens/HomeScreen';
import ShopScreen     from './screens/ShopScreen';
import ProductDetails from './screens/ProductDetails';
import CartScreen     from './screens/CartScreen';
import ProfileScreen  from './screens/ProfileScreen';
import AboutScreen    from './screens/AboutScreen';
import WishlistScreen from './screens/WishlistScreen';

const Stack  = createNativeStackNavigator();
const Tab    = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Inner Stack: Shop list + Product Details
function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ShopList'
        component={ShopScreen}
        options={({ navigation }) => ({
          title: 'Shop',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Text style={{ marginRight: 10, fontSize: 22 }}>🛒</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={({ route, navigation }) => ({
          title: route.params.item.name,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Text style={{ marginRight: 10, fontSize: 22 }}>🛒</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

// Tab Navigator: Home | Shop | Cart | Profile
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false,
        tabBarStyle: { backgroundColor: '#1F4E79' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'rgba(255,255,255,0.5)' }}
    >
      <Tab.Screen name='Home'    component={HomeScreen}
        options={{ tabBarLabel: 'Home', tabBarIcon: () => <Text>🏠</Text> }} />
      <Tab.Screen name='Shop'    component={ShopStack}
        options={{ tabBarLabel: 'Shop', tabBarIcon: () => <Text>🛍️</Text> }} />
      <Tab.Screen name='Cart'    component={CartScreen}
        options={{ tabBarLabel: 'Cart', tabBarIcon: () => <Text>🛒</Text> }} />
      <Tab.Screen name='Profile' component={ProfileScreen}
        options={{ tabBarLabel: 'Profile', tabBarIcon: () => <Text>👤</Text> }} />
    </Tab.Navigator>
  );
}

// Drawer Navigator wraps Tabs + extra screens
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false,
          drawerStyle: { backgroundColor: '#1F4E79' },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: 'rgba(255,255,255,0.5)' }}
      >
        <Drawer.Screen name='HomeTabs' component={TabNavigator} options={{ drawerLabel: 'Home' }} />
        <Drawer.Screen name='About'    component={AboutScreen} options={{ drawerLabel: 'About Us' }} />
        <Drawer.Screen name='Wishlist' component={WishlistScreen} options={{ drawerLabel: 'Wishlist' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// @i_abdul.basit Ig
    