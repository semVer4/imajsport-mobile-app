import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Event2Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
            <Text style={styles.burger}>☰</Text>
        </TouchableOpacity>
       <Image source={require('../assets/img/e2.png')} style={styles.code} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  code: {
    width: '120%',
    height: '120%',
    marginTop: -140,
    marginLeft: -35,
    zIndex: -10,
  },
  burger: {
    position: 'relative',
    top: 50,
    padding: 10,
    width: 50,
    backgroundColor: '#fff',
    zIndex: 1,
    fontSize: 23,
    color: '#1B2B42',
  },
});

export default Event2Screen;
