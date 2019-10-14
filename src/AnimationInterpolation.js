import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationInterpolation extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.timing(animation, {
            toValue: 1,
            duration: 1500
        }).start(() => {
            Animated.timing(animation, {
                toValue: 0,
                duration: 1500
            }).start();
        });
    }

    render() {
        const { animation } = this.state;
        
        const boxInterpolation = animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"]
        });
        const boxAnimatedStyles = {
            backgroundColor: boxInterpolation
        };

        const colorInterpolation = animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["rgb(99, 71, 255)", "rgb(255, 99, 71)"]
        });
        const colorAnimatedStyles = {
            color: colorInterpolation
        };

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.handleAnimation}>
                    <Animated.View style={[styles.box, boxAnimatedStyles]}>
                        <Animated.Text style={colorAnimatedStyles}>
                            Hello Animation !
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
        justifyContent: 'center'
    }
});

export default AnimationInterpolation;