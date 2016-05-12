import React, {Component} from 'react';
import ReactNative from 'react-native';
import {observer} from "mobx-react/native";

const {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TabBarIOS
} = ReactNative;

import Header from './Header';
import TabBar from './TabBar.ios';
import AddProject from './AddProject';
import ProjectsList from './ProjectsList';
import ProjectsStore from '../stores/projects';
import Project from '../models/Project';

export default observer(class Projects extends Component {

  componentWillMount() {
    const _project = new Project('yo');
    ProjectsStore.push(_project);
  }

  renderCreatingProject() {
    this.props.navigator.push({
      title: "Create project",
      key: 'create-project',
      component: AddProject
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header rightAction={this.renderCreatingProject.bind(this)} {...this.props}/>
        <ProjectsList projects={ProjectsStore}/>
      </View>
    );
  };
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
