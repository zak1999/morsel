import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const OnboardingScreen2 = () => {
  return (
    <View>
      <Text>This be the SECOND screen of the auth onboarding</Text>
      <Link href={'/onboarding/login'}> login here</Link>
    </View>
  );
};

export default OnboardingScreen2;
