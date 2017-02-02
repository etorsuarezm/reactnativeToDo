import React, { Component } from 'react';
import { 
    View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import TodoListView from '../src/components/TodoListView';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1 }}>
                    <TodoListView />
                </View>
            </Provider>
        );
    }
}

export default App;
