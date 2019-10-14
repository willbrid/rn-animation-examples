import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationSpring extends Component {
    state = {
        animation: new Animated.Value(1)
    }

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.spring(animation, {
            toValue: 2,
            friction: 2,
            tension: 160
        }).start(() => {
            Animated.timing(animation, {
                toValue: 1,
                duration: 100
            }).start();
        });
    }

    render() {
        const { animation } = this.state;

        const animatedStyles = {
            transform: [
                {
                    scale: animation
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'tomato'
    }
});

export default AnimationSpring;