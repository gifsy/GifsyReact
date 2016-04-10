import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Parse} from 'parse/react-native';

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
      <View style={styles.tabContent}>
        {this.state.posts.map(function(post) {
          return <Text key={post.id}>{post.id}</Text>;
        })}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    marginTop: 20
  },
});

export default Timeline;
