import React from 'react';
import { View } from 'react-native';
import ProductEditForm from '../components/ProductEditForm';

export default function EditProductView({route, navigation}) {
  return (
    <View>
      <ProductEditForm route={route} navigation={navigation}  />
    </View>
  );
}