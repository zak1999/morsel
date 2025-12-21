import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { supabase } from '../../supabase';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    if (!email || !password) return Alert.alert('Missing details', 'Email and password required.');
    if (password.length < 6) return Alert.alert('Weak password', 'Use at least 6 characters.');

    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);

    if (error) return Alert.alert('Sign up failed', error.message);

    Alert.alert('Check your email', 'Confirm your email address, then come back and sign in.');
  };

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: '600' }}>Create account</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password (min 6)"
        secureTextEntry
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8 }}
      />

      <Pressable
        onPress={signUp}
        disabled={loading}
        style={{
          backgroundColor: 'black',
          padding: 12,
          borderRadius: 8,
          opacity: loading ? 0.6 : 1,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          {loading ? 'Creating…' : 'Create account'}
        </Text>
      </Pressable>
    </View>
  );
}
