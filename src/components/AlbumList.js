// This is a class based component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // Initialize the state to an empty album list
  state = { albums: [] };

  // lifecycle method. Automatically called when this
  // component is about to be rendered on screen
  componentWillMount() {
      //Get list of albums and store in the state
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
        // .then(response => console.log(response));
        // When setState gets called, the render method is automatically invoked.
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
