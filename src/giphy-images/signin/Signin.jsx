import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setNew} from '../giphy-images-store';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector(state => state.giphyImagesStore.userInfo);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // string email and password in a use reff because we don't need a state if we are not displaying the values
  const email = useRef();
  const passWord = useRef();

  // this useEffect only logging the user email and password
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  // function only sends email and password to Redux Store without using async storage
  const handelSignin = () => {
    setIsLoading(true);
    const userEmail = email.current.value;
    const userPassword = passWord.current.value;
    dispatch(
      setNew({
        name: 'email',
        value: userEmail,
      }),
    );

    dispatch(
      setNew({
        name: 'password',
        value: userPassword,
      }),
    );
    email.current.clear();
    passWord.current.clear();
    navigation.navigate('HomeScreen');
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <View style={styles.container}>
          <Image
            source={require('../../assets/pngegg.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Welcome to Giphy Images App</Text>
          <TextInput
            ref={email}
            style={styles.input}
            placeholder="Email"
            onChangeText={text => (email.current.value = text)}
            autoCapitalize="none"
          />
          <TextInput
            ref={passWord}
            style={styles.input}
            placeholder="Password"
            onChangeText={text => (passWord.current.value = text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handelSignin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0095f6',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
