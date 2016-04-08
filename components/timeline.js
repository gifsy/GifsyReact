import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Timeline extends Component {
  render() {
    return (
      <View style={styles.tabContent}>
        <Text>Timeline</Text>
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

export default Timeline;
