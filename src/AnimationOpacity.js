import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationOpacity extends Component {
    state = {
        animation: new Animated.Value(1)
    }

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.timing(animation, {
            toValue: 0,
            duration: 350
        }).start(() => {
            Animated.timing(animation, {
                toValue: 1,
                duration: 500
            }).start();
        });
    }

    render() {
        const { animation } = this.state;

        const animatedStyles = {
            opacity: animation
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
        width: 150,
        height: 150,
        backgroundColor: 'tomato'
    }
});

export default AnimationOpacity;