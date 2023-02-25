import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAddToFavorites,
  setRemoveItem,
} from '../giphy-images/giphy-images-store';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // icon from Ionicons

const ButtonFavorite = ({item}) => {
  const favorite = useSelector(state => state.giphyImagesStore.favorites); // geting the favorites array from store
  const dispatch = useDispatch();
  // checks if the image in the array returns true if its not it will return false
  const imgaeIncluded =
    favorite.filter(favoriteGif => favoriteGif.id === item.id).length > 0
      ? true
      : false;
  const handleClick = () => {
    if (imgaeIncluded) {
      dispatch(setRemoveItem(item.id));
    } else {
      dispatch(setAddToFavorites(item));
    }
  };

  const buttonText = imgaeIncluded ? 'heart' : 'heart-outline';

  return (
    <TouchableOpacity onPress={handleClick} style={styles.favoritesButton}>
      <Ionicons name={buttonText} size={30} color="#ff5c96" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  favoritesButton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: '3%',
  },
});
export default ButtonFavorite;
