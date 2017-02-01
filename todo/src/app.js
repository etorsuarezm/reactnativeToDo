import React, { Component } from 'react';
import { 
    View
} from 'react-native';
import ToDoMailList from '../src/components/ToDoMailList.js';



class App extends Component {

    toggleCheck() {

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ToDoMailList />
            </View>
        );
    }
}

export default App;
