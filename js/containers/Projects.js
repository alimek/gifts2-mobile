import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TabBarIOS
} from 'react-native';

import Header from './Header';
import TabBar from './TabBar.ios';
import AddProject from './AddProject';

class Projects extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props}/>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            key: 'projects-add',
            title: 'Add new project',
            component: AddProject
          })
        }}>
          <Text>Projects</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
