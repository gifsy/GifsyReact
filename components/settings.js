import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Settings extends Component {
  render() {
    return (
      <View style={styles.tabContent}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    marginTop: 40
  },
});

export default Settings;
