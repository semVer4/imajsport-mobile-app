import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text>{product.description}</Text>
        <Text>Цена: ${product.price}</Text>
        <Button title="Купить" onPress={() => onAddToCart(product)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
  },
});

export default ProductItem;
