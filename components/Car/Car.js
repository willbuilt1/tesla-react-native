import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

const Car = (props) => {
  const { name, price, image } = props.vehicle;

  const toCurrency = (amount) =>
    amount.toLocaleString('en-GB', {
      style: 'currency',
      currency: 'GBP',
    });

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background} />
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {price ? `Starting at ${toCurrency(price)}` : 'Coming Soon'}
        </Text>
      </View>
    </View>
  );
};

export default Car;

const styles = StyleSheet.create({
  container: {
    //The below is to set to height of window rather than container
    height: Dimensions.get('window').height,
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
