import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} = ReactNative;

class Header extends React.Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired
  }

  _renderBackButton() {
    if (this.props.route.__navigatorRouteID > 0) {
      return (
        <TouchableOpacity onPress={this.props.navigator.pop}>
          <Text style={[styles.linkColor]}>{'<'}</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.header}>
        {this._renderBackButton()}
        <Text style={[styles.textColor]}>{this.props.route.title}</Text>
      </View>
    )
  }
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#f9f9fa',
    paddingTop: 25,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#f5f4f6'
  },
  linkColor: {
    color: '#4d79ff',
    fontSize: 30
  },
  textColor: {
    flex: 2,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    lineHeight: 30
  }
})
