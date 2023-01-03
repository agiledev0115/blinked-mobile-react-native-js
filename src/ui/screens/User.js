import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import {useSelector} from 'react-redux';

const Favorites = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Favorites</Text>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  list: {
    paddingHorizontal: units.width / 14,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: units.height / 34,
  },
  topText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.DARK,
  },
  emptyText: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
});
