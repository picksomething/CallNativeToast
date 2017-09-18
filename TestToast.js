/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    PixelRatio
} from 'react-native';

import ToastExample from './ToastAndroid'

export default class ToastTest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.big_button}
                    title="点击调用Android原生Toast"
                    onPress={this.onButtonClick}
                    accessibilityLabel="展示一个Toast信息" />
            </View>
        );
    }

    onButtonClick(event) {
        ToastExample.show('Hello,原生Toast!', ToastExample.SHORT);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    big_button: {
        fontSize: 30,
        textAlign: 'center'
    }
});
