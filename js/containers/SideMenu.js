import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

class SideMenu extends Component {
  render() {
    let {drawer} = this.props
    return (
      <ScrollView style={styles.container}>
       <Text style={styles.controlText}>Control Panel</Text>
       <TouchableOpacity style={styles.button}>
         <Text>Close Drawer</Text>
       </TouchableOpacity>
     </ScrollView>
    );
  }
}

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})
