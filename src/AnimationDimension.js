import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationDimension extends Component {
    state = {
        animation: new Animated.Value(150)
    }

    handleAnimation = () => {
        const { animation } = this.state;

        Animated.timing(animation, {
            toValue: 300,
            duration: 1500
        }).start();
    }

    render() {
        const { animation } = this.state;

        const animatedStyles = {
            width : animation,
            height: animation
        };

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.handleAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]}>
                        <Text>
                            This is real long text. This is real long text.
                            This is real long text. This is real long text.
                            This is real long text. This is real long text.
                        </Text>
                    </Animated.View>
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
        // width: 150,
        // height: 150,
        backgroundColor: 'tomato'
    }
});

export default AnimationDimension;