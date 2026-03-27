import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';
import EmployeesList from './EmployeesList';
import EmployeeDetails from './EmployeeDetails';
import OrdersList from './OrdersList';
import OrderDetails from './OrderDetails';

const Stack = createNativeStackNavigator();

const AdminAppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007bff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ProductsList" 
          component={ProductsList} 
          options={{ title: 'Products' }} 
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetails} 
          // Title set dynamically in component
        />
        <Stack.Screen 
          name="EmployeesList" 
          component={EmployeesList} 
          options={{ title: 'Employees' }} 
        />
        <Stack.Screen 
          name="EmployeeDetails" 
          component={EmployeeDetails} 
          // Title set dynamically in component
        />
        <Stack.Screen 
          name="OrdersList" 
          component={OrdersList} 
          options={{ title: 'Orders' }} 
        />
        <Stack.Screen 
          name="OrderDetails" 
          component={OrderDetails} 
          // Title set dynamically in component
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AdminAppNavigator;
