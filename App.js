import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarList from './components/CarList/CarList';

export default function App() {
  return <CarList />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
