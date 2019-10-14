import React, { Component } from 'react';
import { StyleSheet, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';

class AnimationEasing extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.timing(animation, {
            toValue: 300,
            duration: 500,
            // easing: Easing.back(5),
            // easing: Easing.bounce,
            // easing: Easing.elastic(5),
            easing: Easing.bezier(0.06, 1, 0.86, 0.23)
        }).start();
    }

    render() {
        const { animation } = this.state;

        const animatedStyles = {
            transform: [
                {
                    translateY: animation
                }
            ]
        };

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.handleAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'tomato'
    }
});

export default AnimationEasing;