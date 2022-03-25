import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const PalettePreview = ({ handlePress, colors }) => {
  const slicedColors = colors.slice(0, 5);
  return (
    <FlatList
      data={slicedColors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={handlePress}>
          <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>
        </TouchableOpacity>
      )}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default PalettePreview;
