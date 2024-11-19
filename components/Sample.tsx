import * as React from 'react';
import { View, Text, StyleSheet, Button, GestureResponderEvent } from 'react-native';

export const Sample: React.FC<{}> = () => {
  const handlePress = (evt: GestureResponderEvent) => {
    alert('Hello');
  };

  return (
    <View style={style.container}>
      <Text style={style.main}>From tong</Text>
      <Button onPress={handlePress} title="Click me"></Button>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    color: 'red',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    maxWidth: 100,
  },
});
