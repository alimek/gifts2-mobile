import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
  StyleSheet
} = ReactNative;

class Project extends React.Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{this.props.project.name}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.col50}>
            <Text>to</Text>
          </View>
          <View style={styles.col50}>
            <Text>to</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Project;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#e6e6e6',
    backgroundColor: '#f2f2f2',
    borderRadius: 3,
    marginBottom: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
  },
  header: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#d9d9d9'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  col50: {
    flex: 2
  }
});
