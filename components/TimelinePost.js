import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

class TimelinePost extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.caption}</Text>
        <Image
          style={styles.image}
          source={{uri: this.props.source}}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
  }
});

export default TimelinePost;
