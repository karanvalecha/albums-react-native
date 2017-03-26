// Import libs for making a component

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Make a component

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }
 
 // Render all the albums that was fetched from the API.
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
  
// Render the component
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Make component to other parts of the app

export default AlbumList;