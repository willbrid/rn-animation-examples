import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationAbsolutePosition extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.timing(animation, {
            toValue: 40,
            duration: 1500
        }).start();
    }

    render() {
        const { animation } = this.state;

        const animatedStyles = {
            top: animation,
            left: animation,
            right: animation
        };

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.handleAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]} />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // width: 150,
        height: 150,
        backgroundColor: 'tomato'
    }
});

export default AnimationAbsolutePosition;