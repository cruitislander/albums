import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';


// Just a functional component used for display ie no state registerComponent
const AlbumDetail = ({ album }) => {
  // destructuring
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle } = styles;

  return (
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
          source={{ uri: thumbnail_image }}
          style={thumbnailStyle}
        />
      </View>

      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,      //This and line below stretches image to width of screen
    width: null   //This and line above stretches image to width of screen
  }
};
export default AlbumDetail;
