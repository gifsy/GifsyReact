import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

class TimelinePostHeader extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.username}>{this.props.username}</Text>
        <Text style={styles.spacer}></Text>
        <Text style={styles.posted}>{this.props.posted}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  view: {
    flexDirection: 'row'
  },
  username: {
    fontWeight: 'bold',
    marginLeft: 15,
  },
  posted: {
    marginRight: 15,
  },
  spacer: {
    flex: 1
  }
});

export default TimelinePostHeader;
