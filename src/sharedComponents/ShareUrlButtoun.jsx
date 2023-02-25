import React from 'react';
import {TouchableOpacity, Share, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // icon from Ionicons

const ShareUrlButtoun = ({url}) => {
  // handleShare function opens a share modal contains the url of the image
  const handleShare = async () => {
    try {
      await Share.share({
        message: url,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <TouchableOpacity style={styles.shareButtoun} onPress={handleShare}>
      <Ionicons name={'share-social-outline'} size={25} color={'#1E6A8D'} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  shareButtoun: {
    alignItems: 'flex-end',
    marginRight: '5%',
    marginTop: '2%',
  },
});
export default ShareUrlButtoun;
