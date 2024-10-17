import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const Reserv = ({ navigation }) => {
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
      <Text style={styles.reservText}>Резерв столика</Text>
      <TextInput placeholder='Имя...' style={styles.inp} />
      <TextInput placeholder='Номер телефона' style={styles.inp} />
      <TextInput placeholder='Столик' style={styles.inp} />
      <TextInput placeholder='Время' style={styles.inp} />
      <TextInput placeholder='Дата' style={styles.inp} />
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('ReservDone')}>
        <Text style={styles.buttonText}>Зарезервировать</Text>
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
  reservText: {
    color: '#1B2B42',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inp: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 13,
    borderRadius: 50,
    width: '100%',
    marginLeft: 0,
    marginTop: 20,
  },
  homeButton: {
    backgroundColor: '#1B2B42',
    padding: 15,
    borderRadius: 10,
    marginTop: 110,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Reserv;
