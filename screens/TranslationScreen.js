import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TranslationScreen = ({ navigation }) => {
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
      <Text style={styles.doneText}>Спортивные трансляции</Text>
      <Image source={require('../assets/img/translation.png')} style={styles.done} />
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
  done: {
    marginTop: 20,
    width: 320,
    marginLeft: 28,
    height: '62%',
  },
  doneText: {
    color: '#1B2B42',
    textAlign: 'left',
    fontSize: 20,
    marginTop: 70,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: '#1B2B42',
    padding: 15,
    borderRadius: 10,
    marginTop: 330,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TranslationScreen;
