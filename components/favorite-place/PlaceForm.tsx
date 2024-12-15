import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';

export const PlaceForm = () => {
  const [title, setTitle] = useState('');

  function changeTitleHandler(text: string) {
    setTitle(text);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput onChangeText={changeTitleHandler} value={title} style={styles.input}></TextInput>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.light.text,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderColor: Colors.light.tint,
    borderWidth: 1,
  },
});
