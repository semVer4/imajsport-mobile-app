import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const EventScreen = ({ navigation, cart, setCart }) => {
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
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Event1')}>
          <Text style={styles.buttonText}>Фестиваль японского саке</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Event2')}>
          <Text style={styles.buttonText}>Караоке-вечер</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Event3')}>
          <Text style={styles.buttonText}>Футбольный фест</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Event4')}>
          <Text style={styles.buttonText}>Суши мастер-класс</Text>
        </TouchableOpacity>
      </View>

      {/* Иконка корзины */}
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    padding: 20,
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
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 170,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartIconContainer: {
    marginTop: 130,
    marginLeft: 180,
  },
});

export default EventScreen;
