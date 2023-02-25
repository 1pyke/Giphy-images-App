import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ButtonFavorite from '../../sharedComponents/ButtonFavorite'; // this Component handel the favorite logic by passing the imgae to it
import {setRemoveAllFavorites} from '../giphy-images-store'; // getting the remove all reducer function

const FavoriteCard = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.giphyImagesStore.favorites);
  const navigation = useNavigation();

  // handelMoreDetails function navigates you to the MoreDetails page
  const handelMoreDetails = item => {
    navigation.navigate('MoreDetails', item);
  };
  // removes all favorites function by using the setRemoveAllFavorites rudecer
  const handelRemoveAll = () => {
    dispatch(setRemoveAllFavorites());
  };
  return (
    <View>
      {favorite.length < 1 ? (
        <View style={styles.noFavoriteContainer}>
          <Text style={styles.noFavoriteText}>There's no Favorite Images</Text>
        </View>
      ) : (
        <>
          <View style={styles.removeAllFavoritesButton}>
            <Text style={styles.totalIteams}>
              Total Saved Items : {favorite.length}
            </Text>
            <TouchableOpacity onPress={handelRemoveAll}>
              <Text style={styles.removeAllFavoritesText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            suppressWarning={true}
            data={favorite}
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
                  <Text style={styles.description}>{item.username}</Text>
                  <TouchableOpacity
                    onPress={() => handelMoreDetails(item)}
                    style={styles.favoriteButton}>
                    <Text style={styles.favoriteButtonText}>
                      See More Details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.5}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  noFavoriteContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavoriteText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  removeAllFavoritesText: {
    color: '#833AB4',
    fontSize: 20,
    padding: 6,
  },
  removeAllFavoritesButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: '1%',
    marginTop: '4%',
  },
  totalIteams: {
    fontSize: 15,
    color: '#1B98E0',
    marginBottom: '4%',
    marginTop: '2%',
    marginLeft: '3%',
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
    backgroundColor: '#2f8dcb',
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

export default FavoriteCard;
