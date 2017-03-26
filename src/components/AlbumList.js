// Import libs for making a component

import React from 'react';
import { Text, View } from 'react-native';

// Make a component

const AlbumList = (props) => {
  // const { textStyle, viewStyle } = styles

	return (
    <View>
      <Text> Album List !!! </Text>
    </View>
  )
}

// const styles = {
//   viewStyle: {
//     backgroundColor: '#F8F8F8',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     paddingTop: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     position: 'relative',
//     elevation: 2
//   },
//   textStyle: {
//   	fontSize: 20
//   }
// }

// Make component to other parts of the app

export default AlbumList;