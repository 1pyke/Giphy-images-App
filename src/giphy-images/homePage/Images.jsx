import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
//////////////////Reusable///////////////////
import ButtonFavorite from '../../sharedComponents/ButtonFavorite';
// this Component handel the favorite logic by passing the imgae to it
const API_KEY = 'I2K8kPab4SaWDK24ieiuryCp8ontUr0u'; //key from GIPHY API i can use it in .env file but i wanted you to use the same key
const PAGE_SIZE = 20;

const Images = () => {
  const navigation = useNavigation();
  const [gifs, setGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchGifs(currentPage);
  }, []);
  // fetchGifs function make Giphy api requset and based on the limtes and page size
  const fetchGifs = async page => {
    setIsLoading(true);
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${PAGE_SIZE}&offset=${
        (page - 1) * PAGE_SIZE
      }
      `,
    );
    const newGifs = response.data.data;
    setGifs(prevGifs => [...prevGifs, ...newGifs]);
    setCurrentPage(page);
    setIsLoading(false);
  };
  const handleLoadMore = () => {
    fetchGifs(currentPage + 1);
  };
  // handelMoreDetails function navigates you to the MoreDetails page
  const handelMoreDetails = item => {
    navigation.navigate('MoreDetails', item);
  };
  return (
    <View>
      <FlatList
        suppressWarning={true}
        data={gifs}
        renderItem={({item}) => (
          <View key={item.id} style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: item.images.downsized.url}}
            />
            <View style={styles.cardDetails}>
              <ButtonFavorite item={item} />
              <Text style={styles.title}>{item.title}</Text>
              <Text numberOfLines={2} style={styles.description}>
                {item.user?.description}
              </Text>
              <TouchableOpacity
                onPress={() => handelMoreDetails(item)}
                style={styles.favoriteButton}>
                <Text style={styles.favoriteButtonText}>See More Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={
          isLoading ? (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              style={styles.loaderContainer}
            />
          ) : (
            <TouchableOpacity
              onPress={handleLoadMore}
              style={styles.loadMoreButton}>
              <Text style={styles.loadMoreText}>Please Wait a Secound</Text>
            </TouchableOpacity>
          )
        }
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  cardDetails: {
    flex: 1,
    padding: 10,
  },
  favoritesButton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: '3%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  favoriteButton: {
    backgroundColor: '#4E86B4',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  favoriteButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  loaderContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
});
export default Images;
