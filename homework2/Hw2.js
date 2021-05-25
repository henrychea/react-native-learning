import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';

export default function Hw2() {
  const [name, setName] = useState('');

  function onInputChange(value) {
    setName(value);
  }

  function onClick() {
    // eslint-disable-next-line no-alert
    alert('Hello' + ' ' + name + ' ');
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Homework 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Input Name"
        onChangeText={onInputChange}
      />
      <Button title="Show Name Alert" onPress={onClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#ba1200ff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '700',
    color: '#508aa8ff',
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
  view: {
    margin: 30,
  },
});
