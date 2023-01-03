import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const CustomButton = ({title, onPress, backColor, fontColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: backColor}]}>
      <Text style={[styles.title, {color: fontColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ORANGE,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: units.height / 51.31,
  },
  title: {
    fontFamily: 'Noto Sans JP',
    color: colors.WHITE,
    fontWeight: '500',
    fontSize: 16,
  },
});
