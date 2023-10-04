import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/">Go to Main Page</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
