// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProductsList from './screens/ProductsList';
import ProductDetails from './screens/ProductDetails';
import EmployeesList from './screens/EmployeesList';
import EmployeeDetails from './screens/EmployeeDetails';
import OrdersList from './screens/OrdersList';
import OrderDetails from './screens/OrderDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* Home Screen: header hidden */}
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='ProductsList' component={ProductsList}
          options={{ title: 'Products' }} />
        <Stack.Screen name='ProductDetails' component={ProductDetails}
          options={({ route }) => ({ title: route.params.product.name })} />
        <Stack.Screen name='EmployeesList' component={EmployeesList}
          options={{ title: 'Employees' }} />
        <Stack.Screen name='EmployeeDetails' component={EmployeeDetails}
          options={({ route }) => ({ title: route.params.employee.name })} />
        <Stack.Screen name='OrdersList' component={OrdersList}
          options={{ title: 'Orders' }} />
        <Stack.Screen name='OrderDetails' component={OrderDetails}
          options={({ route }) => ({ title: `Order #${route.params.order.id}` })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}