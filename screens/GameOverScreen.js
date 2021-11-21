import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({finalGuessRounds, userNumber, startNewGameHandler}) => {
  return (
    <View style={styles.main}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {finalGuessRounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="New Game" onPress={startNewGameHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center"
  },
});

export default GameOverScreen;
