import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const chatIcon = () => {
  return (
    <>
      <View style={styles.circle}>
        <Icon name="comment" size={30} color="black" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#cc8b53',
    color: '#000',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginHorizontal: 10,
    padding: 10
  },
});

export default chatIcon;
