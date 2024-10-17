import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CartScreen = ({ cart, setCart, navigation }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const addOneMore = (id) => {
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
      ));
    }
  };

  const order = () => {
    navigation.navigate('ThankYou');
    setCart([]); // Очистка корзины после заказа
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
      {cart.length === 0 ? (
        <>
          <Text style={styles.emptyCart}>Корзина пуста</Text>
          <Image source={require('../assets/img/group.png')} style={styles.group} />
          <TouchableOpacity style={styles.orderButtonTop} onPress={() => navigation.navigate('Products')}>
            <Text style={styles.buttonText}>Заказать</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.cost}>Цена: {item.price}$</Text>
                <Text>Количество: {item.quantity}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.removeButton}>Удалить</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addOneMore(item.id)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+1</Text>
                  </TouchableOpacity>
                  
                </View>
                <Image source={item.image} style={styles.image} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          <Text style={styles.totalPrice}>Сумма к оплате: {totalPrice}$</Text>
          <TouchableOpacity style={styles.orderButton} onPress={order}>
            <Text style={styles.buttonText}>Заказать</Text>
          </TouchableOpacity>
        </>
      )}
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
    color: '#1B2B42',
  },
  logo: {
    resizeMode: 'contain',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1B2B42',
  },
  item: {
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  emptyCart: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    color: '#1B2B42',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left',
  },
  orderButton: {
    backgroundColor: '#1B2B42',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  orderButtonTop: {
    backgroundColor: '#1B2B42',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 200,
  },
  removeButton: {
    color: 'red',
    marginTop: 5,
    marginRight: 10,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#1B2B42',
    padding: 5,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cost: {
    color: 'red',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: '70%',
    marginTop: -100
  },
  group: {
    width: 250,
    height: 235,
    marginLeft: 60,
    marginTop: '30%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CartScreen;
