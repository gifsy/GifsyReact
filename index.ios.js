import React, {
  AppRegistry,
  Component,
  TabBarIOS,
  StyleSheet,
} from 'react-native';

import {Parse} from 'parse/react-native';

Parse.initialize('myAppId', 'myMasterKey');
Parse.serverURL = 'http://gifsyapp.com/parse';

import Icon from 'react-native-vector-icons/FontAwesome';
import Timeline from './components/Timeline';
import Post from './components/Post';
import Settings from './components/Settings';

class GifsyReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'timeline'
    };
  }
  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItemIOS
          title="Timeline"
          iconName="home"
          selected={this.state.selectedTab === 'timeline'}
          onPress={() => {
            this.setState({
              selectedTab: 'timeline'
            });
          }}>
          <Timeline />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Post"
          iconName="bullhorn"
          selected={this.state.selectedTab === 'post'}
          onPress={() => {
            this.setState({
              selectedTab: 'post'
            });
          }}>
          <Post />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Settings"
          iconName="cogs"
          selected={this.state.selectedTab === 'settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'settings'
            });
          }}>
          <Settings />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('GifsyReact', () => GifsyReact);
