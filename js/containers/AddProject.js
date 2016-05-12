import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} = ReactNative;

import Header from './Header';
import projectsStore from '../stores/projects';
import Project from '../models/Project';

class AddProject extends React.Component {

  addProject() {
    projectsStore.push(new Project('nowy'));
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props}/>
        <TouchableOpacity onPress={this.addProject.bind(this)}>
          <Text>Add new project</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddProject;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
})
