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

  _renderActionButton() {
    if (this.props.rightAction) {
        return (
          <TouchableOpacity onPress={this.props.rightAction}>
            <Text style={[styles.linkColor]}>+</Text>
          </TouchableOpacity>
        )
    }
  }

  render() {
    return (
      <View style={styles.header}>
        {this._renderBackButton()}
        <Text style={[styles.textColor]}>{this.props.route.title}</Text>
        {this._renderActionButton()}
      </View>
    )
  }
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#00abff',
    paddingTop: 25,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#f5f4f6'
  },
  linkColor: {
    color: 'white',
    fontSize: 30
  },
  textColor: {
    flex: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    lineHeight: 30
  }
})
