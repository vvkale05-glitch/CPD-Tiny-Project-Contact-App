import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const searchContact = () => {
    if (!name.trim() || !number.trim()) {
      Alert.alert('Missing Details', 'Please enter both contact name and number.');
      return;
    }

    Alert.alert(
      'Contact Found',
      `Name: ${name}\nNumber: ${number}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Contact App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Contact Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Your Contact Number"
        value={number}
        onChangeText={setNumber}
        keyboardType="phone-pad"
      />

      <View style={styles.button}>
        <Button title="Search Contact" onPress={searchContact} />
      </View>

      <View style={styles.button}>
        <Button
          title="Go To Profile"
          onPress={() => router.push('/profile')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    marginVertical: 6,
  },
});