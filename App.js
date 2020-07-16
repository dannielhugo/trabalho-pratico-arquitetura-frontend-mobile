 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainView from './views/MainView';
import EditView from './views/EditView';
import ProductView from './views/ProductView';
import SuplierView from './views/SuplierView';
import EditProductView from './views/EditProductView';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainView} />
        <Stack.Screen name="Edit" component={EditView} />
        <Stack.Screen name="Product" component={ProductView} />
        <Stack.Screen name="Supplier" component={SuplierView} />
        <Stack.Screen name="Edit Product" component={EditProductView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}