import React, {
  Component,
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

import {Parse} from 'parse/react-native';
import TimelinePost from './TimelinePost';

var Post = Parse.Object.extend("Post");

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.loadData();
  }
  loadData() {
    var query = new Parse.Query(Post);
    query.find({
      success: (results) => this.setState({ posts: results }),
      error: (err) => alert(JSON.stringify(err))
    });
  }
  render() {
    return (
      <View style={styles.view}>
        <ScrollView
          automaticallyAdjustContentInsets={true}
          scrollEventThrottle={0}
          style={styles.scrollView}>
          {this.state.posts.map(function(post) {
            return <TimelinePost key={post.id} caption={post.get('caption')} source={post.get('gifUrl')} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 20
  },
  scrollView: {
  }
});

export default Timeline;
