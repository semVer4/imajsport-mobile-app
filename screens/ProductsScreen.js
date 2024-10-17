import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProductsScreen = ({ navigation, cart, setCart }) => {
  const allProducts = {
    Лапша: [
      { id: 1, name: 'Лапша Карбонара', description: 'Лапша пшеничная удон, бекон, сливки, пармезан, чеснок', price: 15, image: require('../assets/img/1.png') },
      { id: 2, name: 'Лапша с курицей', description: 'Лапша Хурасаме, куриное филе, болгарский перец, фасоль', price: 10, image: require('../assets/img/2.png') },
      { id: 3, name: 'Лапша Удон', description: 'Лапша удон, мидии, кальмары, креветки тигровые', price: 25, image: require('../assets/img/3.png') },
      { id: 4, name: 'Лапша Рисовая', description: 'лук порей, соус устричный, соус соевый, чеснок, имбирь', price: 10, image: require('../assets/img/4.png') },
    ],
    Сети: [
      { id: 5, name: 'Классический Сет', description: 'Комбинация традиционных суши и маки, включая нигири с лососем', price: 45, image: require('../assets/img/5.png') },
      { id: 6, name: 'Вегетарианский Сет', description: 'Ассорти вегетарианских суши с авокадо, огурцом, сладким перцем', price: 15, image: require('../assets/img/6.png') },
      { id: 7, name: 'Фьюжн Сет', description: 'Креативный микс суши с необычными сочетаниями', price: 25, image: require('../assets/img/7.png') },
      { id: 8, name: 'Спайси Сет', description: 'Острые суши и роллы с добавлением чили', price: 50, image: require('../assets/img/8.png') },
    ],
    Драконы: [
      { id: 9, name: 'Зеленый Дракон', description: 'Ролл с начинкой из угря и огурца, покрытый ломтиками авокадо', price: 25, image: require('../assets/img/9.png') },
      { id: 10, name: 'Огненный Дракон', description: 'Острый ролл с тунцом, авокадо и сливочным сыром внутри', price: 35, image: require('../assets/img/10.png') },
      { id: 11, name: 'Золотой Дракон', description: 'Экзотический ролл с креветкой темпура и манго внутри', price: 25, image: require('../assets/img/11.png') },
      { id: 12, name: 'Ледяной Дракон', description: 'Ролл с начинкой из краба и огурца, покрытый ломтиками гребешка', price: 55, image: require('../assets/img/12.png') },
    ],
  };

  // Состояние для выбранного подразделения
  const [selectedCategory, setSelectedCategory] = useState('Лапша');
  const products = allProducts[selectedCategory];

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.burger}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.logo}>IMAJSPORT</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <FontAwesome name="shopping-cart" size={26} color="#1B2B42" />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        {Object.keys(allProducts).map((category) => (
          <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)}>
            <Text style={[styles.categoryText, selectedCategory === category && styles.activeCategory]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.product}>
          <View style={styles.productDetails}>
            <View style={styles.textContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>{item.price}$</Text>
              <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
                <Text style={styles.buttonText}>Купить</Text>
              </TouchableOpacity>
            </View>
            <Image source={item.image} style={styles.image} />
          </View>
        </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  burger: {
    fontSize: 23,
  },
  logo: {
    resizeMode: 'contain',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1B2B42',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingBottom: 10,
  },
  categoryText: {
    fontSize: 18,
    color: '#1B2B42',
  },
  activeCategory: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  item: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 20,  
  },
  image: {
    width: 100,
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 10,
  },
  buyButton: {
    backgroundColor: '#1B2B42',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    width: 100,
    borderRadius: 20,
    textAlign: 'center',
    marginLeft: 50,
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'red',
    position: 'relative',
    top: 22,
  },  
  productName: {
    fontSize: 20,
  },
  productDescription: {
    color: 'silver',
    marginTop: 10,
  },
  product: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  productList: {
    paddingBottom: 20,
  },
});

export default ProductsScreen;
