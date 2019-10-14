import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationDimensionInterpolation extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.timing(animation, {
            toValue: 1,
            duration: 1500
        }).start();
    }

    render() {
        const { animation } = this.state; 
        const widthInterpolate = animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["20%", "30%"]
        });
        const heightInterpolate = animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["20%", "50%"]
        });

        const animatedStyles = {
            width: widthInterpolate,
            height: heightInterpolate
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
        // width: "20%",
        // height: "20%",
        backgroundColor: 'tomato'
    }
});


export default AnimationDimensionInterpolation;