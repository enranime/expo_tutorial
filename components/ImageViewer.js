import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectImage }) {
  console.log(selectImage);
  const imageSRC = selectImage != null ? {uri:selectImage} : placeholderImageSource;
  return (
    <Image source={imageSRC} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
