import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, PanResponder } from 'react-native';

class AnimationWithPanResponder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: new Animated.ValueXY(0)
        };

        const { animation } = this.state;

        /*
        this._x = 0;
        this._y = 0;
        animation.addListener((value) => {
            this._x = value.x;
            this._y = value.y;
        }); 
        */

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => true,
            onMoveShouldSetPanResponder: (e, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                /*
                animation.setOffset({ x: this._x, y: this._y });
                animation.setValue({ x: 0, y: 0});
                */
               animation.extractOffset();
            },
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: animation.x,
                    dy: animation.y
                }
            ]),
            onPanResponderRelease: (e, { vx, vy }) => {
                Animated.decay(animation, {
                    velocity: { x: vx, y: vy },
                    deceleration: 0.997
                }).start();
            }
        });
    }

    render() {
        const { animation } = this.state;

        const animatedStyles = {
            transform: animation.getTranslateTransform()
        };

        return (
            <View style={styles.container}>
                <Animated.View 
                    style={[styles.box, animatedStyles]} 
                    {...this._panResponder.panHandlers}
                />
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

export default AnimationWithPanResponder;