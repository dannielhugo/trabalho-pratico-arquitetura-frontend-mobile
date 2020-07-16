import React from 'react';
import { getProducts } from '../services/api';
import { SafeAreaView, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Constants } from 'react-native-unimodules';
import Product from './Product';

export default function ProductList({ route, navigation }) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    try {
      async function request() {
        const response = await getProducts();
        setProducts(response);
      }

      request();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Product
            id={item.id}
            productName={item.productName}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
            navigation={navigation}
            route={route}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  marginTop: Constants.statusBarHeight,
	},
});