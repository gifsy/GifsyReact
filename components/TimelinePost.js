import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import TimelinePostHeader from './TimelinePostHeader';

class TimelinePost extends Component {
  render() {
    return (
      <View>
        <TimelinePostHeader username='Martin' posted='4w' />
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
