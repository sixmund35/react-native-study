import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IOutlinedIconButtonProps {
  onPress: () => void;
  color: string;
  text: string;
  iconName: string;
  fontSize?: number;
}
export const OutlinedIconButton = (props: IOutlinedIconButtonProps) => {
  return (
    <TouchableOpacity style={style(props).outline} onPress={props.onPress}>
      <Ionicons {...props} name={props.iconName as any} style={{ marginRight: 8 }} size={props.fontSize} />
      <Text style={{ fontSize: props.fontSize }}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const style = (props: IOutlinedIconButtonProps) =>
  StyleSheet.create({
    outline: {
      borderWidth: 1,
      borderColor: props.color,
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
