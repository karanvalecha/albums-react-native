// Import libs for making a component

import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection';


// Make a component

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text > {props.album.title} </Text>
      </CardSection>
    </Card>
  )
}

// Make component to other parts of the app

export default AlbumDetail;