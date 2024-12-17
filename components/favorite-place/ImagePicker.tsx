import { Alert, View, Image, Text, StyleSheet } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus, ImagePickerAsset } from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { OutlinedIconButton } from '../ui/OutlinedIconButton';

export const ImagePicker = () => {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState<ImagePickerAsset | null>(null);

  async function verifyPermissions(): Promise<boolean> {
    if (cameraPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient permissions!', 'You need to grant camera permissions to use this app.', [{ text: 'Okay' }]);
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setImage(image.assets?.[0] ?? null);
  }

  let imagePreview = <Text>No image picked yet.</Text>;
  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image.uri }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedIconButton fontSize={16} onPress={takeImageHandler} color={Colors.light.tint} iconName="camera" text="Take Image" />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
