import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationTranslation extends Component {
    state = {
        animation: new Animated.Value(0)
    };

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.timing(animation, {
            toValue: -300,
            duration: 1500
        }).start(() => {
            animation.setValue(0);
        });
    }

    render() {
        const { animation } = this.state;

        const animatedStyles = {
            transform: [
                {
                    translateY: animation
                    // translateX: animation
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
        width: 150,
        height: 150,
        backgroundColor: 'tomato'
    }
});

export default AnimationTranslation;