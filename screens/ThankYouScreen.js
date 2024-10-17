import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ThankYouScreen = ({ navigation }) => {
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
      <Text style={styles.thankYouText}>Благодарим за заказ!</Text>
      <Image source={require('../assets/img/done.png')} style={styles.done} />
      <Image source={require('../assets/img/code.png')} style={styles.code} />
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>На главную</Text>
      </TouchableOpacity>
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
  thankYouText: {
    color: '#1B2B42',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  done: {
    width: 250,
    height: 235,
    marginTop: 20,
    marginLeft: 70,
  },
  code: {
    marginLeft: 90,
    marginTop: 50,
    width: 200,
    height: 200,
  },
  homeButton: {
    backgroundColor: '#1B2B42',
    padding: 15,
    borderRadius: 10,
    marginTop: 70,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ThankYouScreen;
