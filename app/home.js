import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      {/* <Link href="/">Go to Main Page</Link> */}
      {/* <Link href="/profile">Go to Profile Page</Link> */}
      <Link href="/profile?user=jinu">Go to the profile</Link>
      {/* <Link
        href={{
          pathname: 'profile',
          params: { name: 'jignesh' },
        }}
      >
        Go to Profile Page
      </Link> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
