// This is a class based component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  // lifecycle method. Automatically called when this
  // component is about to be rendered on screen
  componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
