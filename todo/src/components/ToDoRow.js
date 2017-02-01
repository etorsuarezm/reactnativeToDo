import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import CheckBox from './common/CheckBox/CheckBox.js';

class ToDoRow extends Component {
    state = { isChecked: false, title: this.props.title };

    onCheckPress() {
        this.setState({ isChecked: !this.state.isChecked });
    }

    onRowPress() {
        alert('Hey ' + this.state.title + '!!');
    }

    render() {
        return (
            <TouchableOpacity 
                    style={styles.touchableOpacityStyle} 
                    onPress={this.onRowPress.bind(this)}
            >
                    <TouchableWithoutFeedback onPress={this.onCheckPress.bind(this)} >
                        <View>
                            <CheckBox isChecked={this.state.isChecked} />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.descriptionWrapperStyle}>
                        <Text style={styles.titleStyle}>{this.state.title}</Text>
                        <Text style={styles.subtitleStyle}>10:00 p.m.</Text>
                    </View>
                    <View style={styles.indicatorWrapperStyle}>
                    </View>
                    <View style={styles.colorViewStyle} />
            </TouchableOpacity>
        );
    }
}

const styles = {
    touchableOpacityStyle: {
        height: 60,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    checkWrapperStyle: {
        height: 60,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionWrapperStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    titleStyle: {
        marginTop: 10,
        fontWeight: '500',
        fontSize: 14
    },
    subtitleStyle: {
        fontWeight: '500',
        fontSize: 12,
        color: '#BEBEBE'
    },
    indicatorWrapperStyle: {
        height: 60,
        width: 70
    },
    colorViewStyle: {
        height: 40,
        width: 3,
        backgroundColor: '#BEAAF1'
    }
};

export default ToDoRow;
