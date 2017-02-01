import React from 'react';
import { View, Image } from 'react-native';

const CheckBox = ({ isChecked }) => {
    const icon = isChecked ?
                require('./img/checkbox_checked.png')
                : require('./img/checkbox_unchecked.png');

    return (
        <View style={styles.checkWrapperStyle} >
            <Image source={icon} style={styles.imageStyle} />
        </View>
    );
};

const styles = {
    checkWrapperStyle: {
        height: 60,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        height: 20,
        width: 20
    }
};

export default CheckBox;



