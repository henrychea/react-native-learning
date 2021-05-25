import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';
import Hw1 from './homework1/Hw1';
import Hw2 from './homework2/Hw2';
import Hw3 from './homework3/Hw3';

export default () => {
  return (
    <View>
      <Text style={styles.title}>Sopanharith's App</Text>
      <Hw1 />
      <Hw2 />
      <Hw3 />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontSize: 25,
    textAlign: 'center',
    margin: 45,
  },
  input: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
});
