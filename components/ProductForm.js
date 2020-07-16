import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, View, Text } from 'react-native';
import { addProduct } from '../services/api';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function ProductForm() {
  const [productName, seProductName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');

  async function handleSubmit(event) {
    event && event.preventDefault();

    const data = { productName, price, description, imageUrl };

    await addProduct(data);
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS == 'ios'}
      behavior="padding"
      sytle={style.container}
    >

      <View style={style.form}>
        <Text style={style.label}>Product Name</Text>
        <TextInput
          style={style.input}
          placeholder="Product Name"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          collapsable="false"
          value={productName}
          onChangeText={(text) => seProductName(text)}
        />
      </View>

      <View style={style.form}>
        <Text style={style.label}>Price</Text>
        <TextInput
          style={style.input}
          placeholder="Price"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          collapsable="false"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
      </View>

      <View style={style.form}>
        <Text style={style.label}>Description</Text>
        <TextInput
          style={style.input}
          placeholder="Description"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          collapsable="false"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>

      <View style={style.form}>
        <Text style={style.label}>Image Url</Text>
        <TextInput
          style={style.input}
          placeholder="Image Url"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          collapsable="false"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        style={style.buttom}
      >
        <Text style={style.buttonText}>Add Product</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },
  buttom: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});