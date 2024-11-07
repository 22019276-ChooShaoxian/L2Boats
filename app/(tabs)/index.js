import React from 'react';
import {View} from 'react-native';
import Boat from './components/boat.js';


class exportable extends React.Component {
    render() {
        return (
            <View>
                <Boat></Boat>
            </View>
        );
    }
}

export default exportable;
