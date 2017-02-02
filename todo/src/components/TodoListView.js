import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import ToDoRow from './ToDoRow.js';

class TodoListView extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    };
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ToDoRow data={rowData} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoListView);
