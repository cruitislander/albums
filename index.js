// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native'; // import destructuring
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
  // flex:1 will take up whole width of the screen. Can affect scrolling
  <View style={{ flex: 1 }}>
    <Header headerText="Albums" />
    <AlbumList />
  </View>
);

// render it on a device
// param1 : 'albums' must match the project name
// param2 : return the first/top-level component to render in the applications
AppRegistry.registerComponent('albums', () => App);


// List of Albums retrieved from http://rallycoding.herokuapp.com/api/music_albums
