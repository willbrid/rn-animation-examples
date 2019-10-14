import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationScale extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.timing(animation, {
            toValue: -2,
            duration: 1500
        }).start();
    }

    render() {
        const { animation } = this.state;

        const animatedStyles = {
            transform: [
                {
                    // scale: animation
                    // scaleX: animation
                    scaleY: animation
                }
            ]
        };

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.handleAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]}>
                        <Text>This side forward</Text>
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
        backgroundColor: 'tomato'
    }
});

export default AnimationScale;