// Import libs for making a component

import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection';
import Button from './Button';

// Make a component

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = Styles;

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
          <Text style={headerTextStyle} > { title } </Text>
          <Text > { artist } </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => { Linking.openURL(url) }}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

const Styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerTextStyle: {
    // fontSize: 18,
    fontWeight: 'bold'
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

// Make component to other parts of the app

export default AlbumDetail;