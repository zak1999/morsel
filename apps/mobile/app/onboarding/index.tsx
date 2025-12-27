import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const OnboardingScreen1 = () => {
  return (
    <View>
      <Text>This be the first screen of the auth onboarding</Text>
      <Link href={'/onboarding/screen-2'}>Go to next screen</Link>
    </View>
  );
};

export default OnboardingScreen1;
