import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, router, useLocalSearchParams } from 'expo-router';

const Profile = () => {
  const params = useLocalSearchParams();
  console.log(params);
  return (
    <View>
      <Text>Profile</Text>
      {/* <Link href="/">Go to Main Page</Link> */}

      <Pressable onPress={() => router.replace('/')}>
        <Text>Go to Main Page</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
