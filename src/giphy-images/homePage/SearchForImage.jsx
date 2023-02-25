import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import axios from 'axios';
import {Keyboard} from 'react-native';

const API_KEY = 'I2K8kPab4SaWDK24ieiuryCp8ontUr0u'; //key from GIPHY API i can use it in .env file but i wanted you to use the same key

const SearchForImage = () => {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  // useEffect is running the trending images at the first and runs the handlTrending function
  useEffect(() => {
    handlTrending();
  }, []);
  // handlTrending function make an api call and gets 20 trending image
  const handlTrending = async () => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=$trending&limit=20`,
      );
      setImages(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  // handleSearch function takes the search input text and put it in the query
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchText}&limit=10`,
      );
      setImages(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setSearchText('');
      Keyboard.dismiss(); // close the keyboard
    }
  };

  const renderItem = ({item}) => (
    <Image source={{uri: item.images.fixed_height.url}} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search GIFs"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={images}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '45%',
    height: 150,
    margin: 5,
  },
});

export default SearchForImage;
