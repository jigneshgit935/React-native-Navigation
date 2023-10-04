import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View>
      <Text>Main Page</Text>

      <Link href="/home">Go to Home</Link>
      <Link href="/profile">Go to Profile</Link>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
