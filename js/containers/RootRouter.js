import React, {Component} from 'react';
import Drawer from 'react-native-drawer';
import {View, Text, NavigationExperimental, StyleSheet, ScrollView, Navigator, TabBarIOS} from 'react-native';
import Projects from './Projects';
import SideMenu from './SideMenu';
import SlideMenu from 'react-native-side-menu';

class RootRouter extends Component {
  _sceneReducer = (route, navigator) => {
    return <route.component route={route} navigator={navigator}/>;
  }

  render() {
    return (
      <Navigator
        ref="nav"
        style={styles.main}
        initialRoute={{
          key: 'projects',
          index: 1,
          title: 'Projects list',
          component: Projects
        }}
        renderScene={this._sceneReducer}
      />
    );
  }
}

export default RootRouter;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fefdff'
  },
  content: {
    marginTop: 64
  },
});
