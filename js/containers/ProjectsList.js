import React from 'react';
import ReactNative from 'react-native';

const {
  ScrollView,
  StyleSheet
} = ReactNative;

import Project from '../components/Project';

export default class ProjectsList extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.projects.map((project, key) => {
          return <Project key={key} project={project}/>;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
