'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Dimensions,
  DrawerLayoutAndroid,
  StyleSheet,
  ToolbarAndroid,
  View,
  Text,
} = React;
var UIExplorerList = require('./UIExplorerList');

var DRAWER_WIDTH_LEFT = 56;

var example5 = React.createClass({
  getInitialState: function() {
    return {
      example: this._getUIExplorerHome(),
    };
  },

  _getUIExplorerHome: function() {
    return {
      title: 'My React Native Apps',
      component: this._renderHome(),
    };
  },

  componentWillMount: function() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress);
  },

  render: function() {
    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="on-drag"
        ref={(drawer) => { this.drawer = drawer; }}
        renderNavigationView={this._renderNavigationView}>
        {this._renderNavigation()}
      </DrawerLayoutAndroid>
      );
  },

  _renderNavigationView: function() {
    return (
      <UIExplorerList
        onSelectExample={this.onSelectExample}
        isInDrawer={true}
      />
    );
  },

  onSelectExample: function(example) {
    this.drawer.closeDrawer();
    if (example.title === this._getUIExplorerHome().title) {
      example = this._getUIExplorerHome();
    }
    this.setState({
      example: example,
    });
  },

  _renderHome: function() {
    var onSelectExample = this.onSelectExample;
    return React.createClass({
      render: function() {
        return (
          <UIExplorerList
            onSelectExample={onSelectExample}
            isInDrawer={false}
          />
        );
      }
    });
  },

  _renderNavigation: function() {
    var Component = this.state.example.component;
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          logo={require('image!launcher_icon')}
          navIcon={require('image!ic_menu_black_24dp')}
          onIconClicked={() => this.drawer.openDrawer()}
          style={styles.toolbar}
          title={this.state.example.title}
        />
        <Component />
      </View>
    );
  },

  _handleBackButtonPress: function() {
    if (this.state.example.title !== this._getUIExplorerHome().title) {
      this.onSelectExample(this._getUIExplorerHome());
      return true;
    }
    return false;
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#E9EAED',
    height: 56,
  },
});

AppRegistry.registerComponent('example5', () => example5);

// module.exports = UIExplorerApp;
