// Code for android here

// Import some files and that will help you to create components

import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component

const App = () => ( 
  <View>
    <Header headerText={'Albums Android!'} />
    <AlbumList/>
  </View>
);

// Render the component to the device
AppRegistry.registerComponent('albums', () => App);