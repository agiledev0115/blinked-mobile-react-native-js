import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={styles.overlay}>
      <Image
        source={require('../../assets/images/Mark.png')}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    opacity: 0.7,
    width: '100%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
