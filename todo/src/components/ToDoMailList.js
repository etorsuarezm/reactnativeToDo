import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import ToDoRow from './ToDoRow.js';

class ToDoListView extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'App - Onboarding Screens', 'Send email to Joe', 'Meeting with Kelly', 'Pay Phone Bill', 'Walk the cats',
        'App - Onboarding Screens', 'Send email to Joe', 'Meeting with Kelly', 'Pay Phone Bill', 'Walk the cats'
      ])
    };
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ToDoRow title={rowData} />}
        />
      </View>
    );
  }
}

export default ToDoListView;
