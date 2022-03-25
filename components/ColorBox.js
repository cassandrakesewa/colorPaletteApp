import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorname, colorhex }) => {
  const boxColor = {
    backgroundColor: colorhex,
  };

  const textColor = {
    color:
      parseInt(colorhex.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.container, boxColor]}>
      <Text style={[styles.textcolor, textColor]}>
        {colorname} {colorhex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textcolor: {
    fontWeight: 'bold',
  },
  container: {
    paddingVertical: 15,
    margin: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorBox;
