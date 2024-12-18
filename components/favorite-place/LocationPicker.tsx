import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { OutlinedIconButton } from '../ui/OutlinedIconButton';
import { Colors } from '@/constants/Colors';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus, LocationObject } from 'expo-location';
import { useState } from 'react';

export const LocationPicker = () => {
  const [permissionInfo, requestPermission] = useForegroundPermissions();
  const [locationInfo, setLocationInfo] = useState<LocationObject | undefined>();

  async function verifyPermission() {
    if (permissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (permissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient permissions!', 'You need to grant camera permissions to use this app.', [{ text: 'Okay' }]);
      return false;
    }

    return true;
  }

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setLocationInfo(location);
  };

  return (
    <View>
      <View style={style.mapPreview}>
        {locationInfo && (
          <>
            <Text style={{ fontWeight: 'bold' }}>Just simply display raw text here as I have used up google credit!</Text>
            <Text>{JSON.stringify(locationInfo)}</Text>
          </>
        )}
      </View>
      <View style={style.buttonBar}>
        <OutlinedIconButton iconName="pin" text="Locate User" onPress={getLocationHandler} color={Colors.light.text} />
        <OutlinedIconButton iconName="map" text="Pick on Map" onPress={() => {}} color={Colors.light.text} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mapPreview: {
    marginBottom: 8,
    width: '100%',
    backgroundColor: Colors.light.background,
    padding: 8,
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginBottom: 8,
  },
});
