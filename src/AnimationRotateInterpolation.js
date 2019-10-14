import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationRotateInterpolation extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.timing(animation, {
            toValue: 360,
            duration: 1500
        }).start();
    }

    render() {
        const { animation } = this.state;

        const rotateInterpolate = animation.interpolate({
            inputRange: [0, 360],
            outputRange: ["0deg", "360deg"]
            // outputRange: ["0deg", "-360deg"]
            // outputRange: ["0deg", "1080deg"]
            // outputRange: ["0deg", "180deg"]
        });

        const animatedStyles = {
            transform: [
                {
                    rotate: rotateInterpolate
                    // rotateX: rotateInterpolate
                    // rotateY: rotateInterpolate
                }
            ]
        };

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.handleAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]}>
                        <Animated.Text>
                            Hello Rotate !
                        </Animated.Text>
                    </Animated.View>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato'
    }
});

export default AnimationRotateInterpolation;