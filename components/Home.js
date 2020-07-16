import React from 'react';
import {
  View,
  Button,
  StyleSheet,
} from 'react-native';

export default function Home({ route, navigation }) {
  return (
    <View style={styles.body}>
      <Button
        style={styles.item}
        title='Manage Suppliers'
        onPress={() => {
          navigation.navigate('Supplier');
        }}
      />

      <View style={styles.view}></View>

      <Button
        style={styles.item}
        title='Manage Products'
        onPress={() => {
          navigation.navigate('Product');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F2F3F4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  view: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
	  marginVertical: 8,
    marginHorizontal: 16,
  },
});
