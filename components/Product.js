import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import { deleteProduct } from '../services/api';

export default function Product({ id, productName, price, description, imageUrl, navigation }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{productName}</Text>
      <Text style={styles.title}>{price}</Text>
      <Text style={styles.title}>{description}</Text>
      <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{ uri: imageUrl }} />
      <Button
        title='Edit'
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Edit Product', {
            id,
            productName,
            price,
            description,
            imageUrl,
          });
        }}
      />
      <Button
        title='Delete'
        onPress={async () => await deleteProduct(id)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F2F3F4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
  }
});
