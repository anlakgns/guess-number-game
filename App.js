import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [finalGuessRounds, setFinalGuessRounds] = useState(0);

  const startNewGameHandler = () => {
    setFinalGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setFinalGuessRounds(numOfRounds);
  };

  // this is an custom basic routing, we will use better one next projects.
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && finalGuessRounds <= 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        onGameOver={gameOverHandler}
      />
    );
  } else if (finalGuessRounds > 0) {
    content = (
      <GameOverScreen
        finalGuessRounds={finalGuessRounds}
        userNumber={userNumber}
        startNewGameHandler={startNewGameHandler}

      />
    );
  }

  return (
    <View style={styles.main}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
});
