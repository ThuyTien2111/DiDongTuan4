import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import thư viện icon

export default function App() {
  var [name, setName] = useState('');
  var [password, setPassword] = useState('');
  var [loginMessage, setLoginMessage] = useState('');

  var user = [{
    name: 'Tien',
    pass: '123',
  },
  {
    name: 'Tien2',
    pass: '12345',
  }
  ]
  const handleLogin = () => {
    // Check if the entered name and password match any user in your data
    var matchingUser = user.find((user) => user.name === name && user.pass === password);
  
    if (matchingUser) {
      // Update the state to show a success message
      setLoginMessage('Login successful with User:'+ name);
    } else {
      // Update the state to show a failure message
      setLoginMessage('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={32} style={styles.icon} />
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={32} style={styles.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Text style={styles.loginMessage}>{loginMessage}</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FBCB00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: 100,
    height: 40,
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 35.16,
    marginLeft: 30,
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  inputContainer: {
    height: 54,
    width: 330,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  icon: {
    padding: 10,
  },
  input: {
    width: 48,
    height: 21,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21.09,
    flex: 1,
  },
  loginButton: {
    height: 45,
    width: 330,
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 30,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
    textAlign: 'center',
  },
  forgotPassword: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 23.44,
    color: 'black',
  },
  loginMessage: {
    fontSize: 20,
    fontWeight: 700,
    color: 'green', // You can adjust the color for success or failure
    textAlign: 'center',
  },
};