import { Place } from '@/models/Place';
import { FlatList, View, Image, Text, Pressable, StyleSheet } from 'react-native';

interface IProps {
  places: Place[];
}

export const PlaceList = ({ places }: IProps) => {
  if (!places || places.length === 0) {
    return (
      <View style={placeListStyles.fallbackContainer}>
        <Text style={placeListStyles.fallbackText}>No places added yet.</Text>
      </View>
    );
  }

  return <FlatList data={places} keyExtractor={(place) => place.id} renderItem={(itemData) => <PlaceItem place={itemData.item} />} />;
};

const PlaceItem: React.FC<{ place: Place }> = ({ place }) => {
  return (
    <Pressable>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title || '-'}</Text>
        <Text>{place.address || '-'}</Text>
      </View>
    </Pressable>
  );
};

const placeListStyles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
  },
});
const placeItemStyles = StyleSheet.create({});
