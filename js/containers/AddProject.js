import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text
} = ReactNative;

import Header from './Header';

class AddProject extends React.Component {
  render() {
    return (
      <View>
        <Header {...this.props}/>
        <Text>cos</Text>
      </View>
    );
  }
}

export default AddProject;
