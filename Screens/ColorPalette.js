import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPallete = ({ route }) => {
  const { colors } = route.params;
  return (
    <FlatList
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorname={item.colorName} colorhex={item.hexCode} />
      )}
      ListHeaderComponent={
        <Text style={styles.header}>{colors.paletteName}</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20,
  },
});

export default ColorPallete;
