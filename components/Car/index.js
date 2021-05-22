import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Car = ({ car, price }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.background}
      />
      <View style={styles.header}>
        <Text style={styles.title}>{car}</Text>
        <Text style={styles.subtitle}>Starting at {price}</Text>
      </View>
    </View>
  );
};

export default Car;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'red',
  },
  background: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  header: {
    marginTop: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 20,
    color: '#5c5e62',
  },
});
