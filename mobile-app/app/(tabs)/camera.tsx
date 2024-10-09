import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  // @ts-ignore
  const cameraRef = useRef<CameraView>(undefined);
  const [permission, requestPermission] = useCameraPermissions();
  // @ts-ignore
  const [photo, setPhoto] = useState();
  const [hasMediaLibraryPermissions, setMediaLibraryPermissions] = useState();

  useEffect(() => {
    async function getMediaPermissions () {
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      // @ts-ignore
      setMediaLibraryPermissions(mediaLibraryPermission.status === "granted");
    }
    getMediaPermissions();
  },[permission, cameraRef])

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  // Assume we have camera permissions!
  let takePicture = async () => {
    let options = {
      exif: false,
      quality: 1,
      base64: true
    }

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    // @ts-ignore
    setPhoto(newPhoto);
  }

  // Assume we have a photo
  if(photo) {
    let savePhoto = () => {
      // @ts-ignore
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.photoPreview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        {hasMediaLibraryPermissions ? <Button title="Save photo" onPress={savePhoto} /> : undefined}
        <Button title="Trash it! 🗑️" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    )
  }


  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera}
        ref={cameraRef}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </View>
      </CameraView>
      <View style={{ flex: 1 }}>
        <Button title="Take a pic!" onPress={takePicture} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  photoPreview: {
    alignSelf: 'stretch',
    flex: 1
  }
});
