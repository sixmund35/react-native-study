import { PlaceList } from '@/components/favorite-place/PlaceList';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AllPlacesScreen() {
  return (
    <SafeAreaView>
      <PlaceList places={[]} />
    </SafeAreaView>
  );
}
