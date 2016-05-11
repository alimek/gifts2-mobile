import React, {Component} from 'react';
import {TabBarIOS, View, Text} from 'react-native';

class TabBar extends Component {

  _renderContent = (color, pageText, num) => {
    return (
      <View>
        <Text >{pageText}</Text>
        <Text >{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="white">
        <TabBarIOS.Item
          title="Projects"
          selected={true}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
            {this._renderContent('#21551C', 'Green Tab', 1)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Blue Tab"
          selected={true}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
            {this._renderContent('#21551C', 'Green Tab', 1)}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

export default TabBar;
