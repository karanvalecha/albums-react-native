// Import libs for making a component

import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Make a component

class AlbumList extends Component {

  render = () => {
  	return (
      <View>
        <Text> Album List !!! </Text>
      </View>
    )
  }
}

// Make component to other parts of the app

export default AlbumList;