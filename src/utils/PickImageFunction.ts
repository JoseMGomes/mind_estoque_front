import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

export async function pickImage() {
  try {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return "Not accept";
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets;
    }
  } catch (err) {
    console.log('Erro ao selecionar imagem:', err);
    return false;
  }
}