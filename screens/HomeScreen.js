import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation, cart, setCart }) => {
  // Проверяем наличие cart и setCart
  if (!cart || !setCart) {
    return null; // Если пропсы не переданы, ничего не рендерим
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>IMAJSPORT</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonG} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonTextG}>Главная</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Products')}>
          <Text style={styles.buttonText}>Заказать</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Translation')}>
          <Text style={styles.buttonText}>Трансляции</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Контакты</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Reserv')}>
          <Text style={styles.buttonText}>Резерв столика</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Event')}>
          <Text style={styles.buttonText}>События</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cartIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <FontAwesome name="shopping-cart" size={52} color="#1B2B42" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 60,
    backgroundColor: '#1B2B42',
    width: '100%',
    textAlign: 'center',
    padding: 20,
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonG: {
    backgroundColor: '#fff',
    borderBlockEndColor: '#1B2B42',
    borderBlockStartColor: '#1B2B42',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1B2B42',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
  },
  buttonTextG: {
    color: '#1B2B42',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cartIconContainer: {
    marginBottom: 30,
  },
});

export default HomeScreen;
