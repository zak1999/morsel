import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { supabase } from '../../supabase';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    if (!email || !password) return Alert.alert('Missing details', 'Email and password required.');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) Alert.alert('Sign in failed', error.message);
  };

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: '600' }}>Sign in</Text>

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
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8 }}
      />

      <Pressable
        onPress={signIn}
        disabled={loading}
        style={{
          backgroundColor: 'black',
          padding: 12,
          borderRadius: 8,
          opacity: loading ? 0.6 : 1,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          {loading ? 'Signing in…' : 'Sign in'}
        </Text>
      </Pressable>
    </View>
  );
}
