import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ButtonFavorite from '../../sharedComponents/ButtonFavorite';

const MoreDetails = ({route}) => {
  const {images, title, type, slug, url} = route.params;
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}></View> */}
      <ButtonFavorite item={route.params} />
      <Image source={{uri: images.original.url}} style={styles.image} />
      <View style={styles.footer}>
        <Text style={styles.title}>Title: {title}</Text>
        <Text style={styles.type}>Type: {type}</Text>
        <Text style={styles.title}>Slug: {slug}</Text>
        <Text style={styles.url}>URL: {url}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 400,
  },
  footer: {
    padding: 10,
  },
  type: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    marginBottom: 5,
  },
  url: {
    color: '#0095f6',
  },
});

export default MoreDetails;
