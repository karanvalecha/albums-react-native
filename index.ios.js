// Code for IOS here
// ----------------------------------------------------//
// Importing a library from React to create a component

import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component

const App = () => ( 
  <View>
    <Header headerText={'Albums IOS!'} viewStyles={ { paddingTop: 15 } } />
    <AlbumList/>
  </View>
);

// Render the component to the device
AppRegistry.registerComponent('albums', () => App);