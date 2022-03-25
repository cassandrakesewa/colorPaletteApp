import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const newPalette = route.params ? route.params.newPalette : null;
  const [paletteData, setPaletteData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPallettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (result.ok) {
      const palettes = await result.json();
      setPaletteData(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPallettes();
  }, []);

  useEffect(() => {
    if (newPalette) {
      setPaletteData((current) => [newPalette, ...current]);
    }
  }, [newPalette]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPallettes();
    setIsRefreshing(false);
  }, []);

  return (
    <FlatList
      style={{ backgroundColor: 'white' }}
      data={paletteData}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.textStyle}>{item.paletteName}</Text>
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item);
            }}
            colors={item.colors}
          />
        </View>
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}
        >
          <Text style={styles.addcolorStyle}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  addcolorStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: 'teal',
  },
});

export default Home;
