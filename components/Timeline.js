import React, {
  Component,
  StyleSheet,
  View,
  ListView,
  Text
} from 'react-native';

import {Parse} from 'parse/react-native';
import TimelinePost from './TimelinePost';

var Post = Parse.Object.extend("Post");

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
    this.loadData();
  }
  loadData() {
    var query = new Parse.Query(Post);
    query.find({
      success: (results) => this.setState({ posts: this.state.posts.cloneWithRows(results) }),
      error: (err) => alert(JSON.stringify(err))
    });
  }
  render() {
    return (
      <ListView
        dataSource={this.state.posts}
        renderRow={(post) => <TimelinePost source={post.get('gifUrl')} />}
        style={styles.listView}
      />
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    marginTop: 0
  }
});

export default Timeline;
