import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Header = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  header: {
    color: 'black',
    fontSize: 18,
  },
});

export default Header;
