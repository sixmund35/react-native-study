import { ThemedText } from '@/components/ThemedText';
import { UnknownOutputParams, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

interface IProps extends UnknownOutputParams {
  id: string;
}
const TodoDetails: React.FC<IProps> = () => {
  const props = useLocalSearchParams<IProps>();

  return (
    <View>
      <ThemedText>id = {props.id}</ThemedText>
    </View>
  );
};

export default TodoDetails;
