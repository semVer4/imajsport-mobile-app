import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ThankYouScreen from './screens/ThankYouScreen';
import ReservScreen from './screens/ReservScreen';
import ReservDoneScreen from './screens/ReservDoneScreen';
import TranslationScreen from './screens/TranslationScreen';
import EventScreen from './screens/EventScreen';
import Event1Screen from './screens/Event1Screen';
import Event2Screen from './screens/Event2Screen';
import Event3Screen from './screens/Event3Screen';
import Event4Screen from './screens/Event4Screen';

const Stack = createStackNavigator();

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <HomeScreen {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        <Stack.Screen name="Products" options={{ headerShown: false }}>
          {props => <ProductsScreen {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        <Stack.Screen name="Cart" options={{ headerShown: false }}>
          {props => <CartScreen {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        <Stack.Screen name="ThankYou" component={ThankYouScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Reserv" component={ReservScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReservDone" component={ReservDoneScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Translation" component={TranslationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Event" component={EventScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Event1" component={Event1Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Event2" component={Event2Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Event3" component={Event3Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Event4" component={Event4Screen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
