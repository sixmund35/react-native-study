import { PlaceList } from '@/components/favorite-place/PlaceList';
import { IconButton } from '@/components/ui/IconButton';
import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AllPlacesScreen() {
  const navigation = useRouter();
  const theme = useTheme();

  return (
    <SafeAreaView>
      <View style={style.navBar}>
        <Text style={{ ...style.title, color: theme.colors.text }}>All Places</Text>
        <View>
          <IconButton
            name="add"
            size={36}
            onPress={() => navigation.navigate({ pathname: '/favorite-place/add-place' }, { relativeToDirectory: true })}
          />
        </View>
      </View>
      <PlaceList places={[]} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  navBar: {
    height: 60,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
