import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ButtonFavorite from '../../sharedComponents/ButtonFavorite';
import {useNavigation} from '@react-navigation/native';
import {setRemoveAllFavorites} from '../giphy-images-store';

const FavoriteCard = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.giphyImagesStore.favorites);
  const navigation = useNavigation();

  const handelMoreDetails = item => {
    navigation.navigate('MoreDetails', item);
  };
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
          <Button
            onPress={handelRemoveAll}
            title="Remove all"
            style={styles.removeAllFavoritesButton}
          />
          <Text style={styles.totalIteams}>
            Total Saved Items : {favorite.length}
          </Text>
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
  removeAllFavoritesButton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  totalIteams: {
    textAlign: 'center',
    fontSize: 15,
    color: 'blue',
    marginBottom: '4%',
    marginTop: '2%',
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
