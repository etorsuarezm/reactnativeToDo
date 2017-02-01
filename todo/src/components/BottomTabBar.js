import React from 'react';
import { Modal } from 'react-native';

const BottomTabBar = () => {
    return (
        <Modal
            style={{
                opacity: 0.7,
                height: 100, 
                position: 'absolute', 
                left: 0, 
                right: 0,
                backgroundColor: '#FF0000'
            }} 
        />
    );
};

export default BottomTabBar;
