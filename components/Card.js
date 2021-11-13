import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ ...styles.main, ...props.styles }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  main: {
    // Bu shadow style sadece IOS da çalışıyor.
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // Android için elevation style yazıyoruz.
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
