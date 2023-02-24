import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAddToFavorites,
  setRemoveItem,
} from '../giphy-images/giphy-images-store';
import {View, Button, StyleSheet} from 'react-native';

const ButtonFavorite = ({item}) => {
  const favorite = useSelector(state => state.giphyImagesStore.favorites);
  const dispatch = useDispatch();
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

  const buttonText = imgaeIncluded ? 'Unsave' : 'Save';

  return (
    <View style={styles.favoritesButton}>
      <Button onPress={handleClick} title={buttonText} />
    </View>
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
