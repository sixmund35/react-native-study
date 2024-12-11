import { TouchableOpacity, OpaqueColorValue, GestureResponderEvent, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IProps {
  name: string;
  size: number | undefined;
  color?: OpaqueColorValue | string;
  onPress?: (evt?: GestureResponderEvent) => void;
}

export const IconButton = (props: IProps) => {
  const { name, onPress } = props;

  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Ionicons {...props} name={name as any} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // not being used because TouchableOpacity has a built-in opacity prop
  pressed: {
    opacity: 0.7,
  },
});
